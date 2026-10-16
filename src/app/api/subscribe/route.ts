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

async function syncToZohoLead(email: string, phone: string, cities?: string[]) {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) return;

  try {
    const tokenRes = await fetch("https://accounts.zoho.in/oauth/v2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
      }),
    });
    const tokenData = await tokenRes.json();
    if (!tokenData.access_token) return;

    const apiDomain = process.env.ZOHO_API_DOMAIN || "https://www.zohoapis.in";
    const leadPayload = {
      data: [
        {
          Last_Name: email.split("@")[0] || "Subscriber",
          Email: email.trim().toLowerCase(),
          Phone: phone ? `+${formatBrevoPhone(phone)}` : "",
          Company: "Newsletter Subscriber",
          Lead_Source: "Food Talk Website",
          LEADCF1: "Food Talk",
          Lead_Status: "Not Contacted",
          Description: cities?.length ? `Subscribed Cities: ${cities.join(", ")}` : "Newsletter Signup",
        },
      ],
      trigger: ["approval", "workflow", "blueprint"],
    };

    await fetch(`${apiDomain}/crm/v2/Leads`, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${tokenData.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadPayload),
    });
  } catch (err) {
    console.error("Zoho newsletter lead sync error:", err);
  }
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

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        attributes,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      if (errData.code !== "duplicate_parameter") {
        console.error("Brevo API error:", res.status, errData);
        return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 500 });
      }
    }

    // Sync to Zoho CRM in background
    syncToZohoLead(email, phone, selectedCities).catch(() => {});

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Subscribe error:", err);
    const message = err instanceof Error ? err.message : "Failed to subscribe";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
