import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function formatBrevoPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  // 10-digit Indian number without country code
  if (digits.length === 10) {
    return `91${digits}`;
  }
  // 11 digits starting with 0 (e.g. 09876543210)
  if (digits.length === 11 && digits.startsWith("0")) {
    return `91${digits.slice(1)}`;
  }
  return digits;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, phone, country, selectedCities } = body;

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (phone && typeof phone === "string") {
      const digits = phone.replace(/\D/g, "");
      if (digits.length < 7 || digits.length > 16) {
        return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
      }
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Newsletter service not configured." }, { status: 500 });
    }

    const attributes: Record<string, unknown> = {};
    const cleanPhone = phone ? formatBrevoPhone(String(phone)) : "";

    if (cleanPhone) {
      attributes.WHATSAPP = cleanPhone;
      attributes.SMS = cleanPhone;
    }

    if (country) {
      attributes.COUNTRY = country;
    }

    if (selectedCities && Array.isArray(selectedCities) && selectedCities.length > 0) {
      attributes.REGION = selectedCities;
      attributes.CITY = selectedCities.join(", ");
    }

    const listId = Number(process.env.BREVO_LIST_ID || 25);

    const saveContact = (attrs: Record<string, unknown>) =>
      fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          attributes: attrs,
          listIds: [listId],
          updateEnabled: true,
        }),
      });

    let res = await saveContact(attributes);

    if (!res.ok) {
      let errData = await res.json().catch(() => ({}));

      // Brevo allows one contact per phone number; keep the email even if the number is taken.
      const ids: string[] = errData?.metadata?.duplicate_identifiers ?? [];
      if (errData.code === "duplicate_parameter" && ids.some((id) => id === "SMS" || id === "WHATSAPP")) {
        console.warn("Phone already used by another Brevo contact, saving without phone:", email);
        const rest = { ...attributes };
        delete rest.SMS;
        delete rest.WHATSAPP;
        res = await saveContact(rest);
        errData = res.ok ? {} : await res.json().catch(() => ({}));
      }

      if (!res.ok && errData.code !== "duplicate_parameter") {
        console.error("Brevo API error:", res.status, errData);
        return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Subscribe error:", err);
    const message = err instanceof Error ? err.message : "Failed to subscribe";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
