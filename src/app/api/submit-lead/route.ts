import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

async function getAccessToken(): Promise<string> {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Zoho CRM credentials not configured.");
  }

  const res = await fetch("https://accounts.zoho.in/oauth/v2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
    }),
  });

  const data = await res.json();
  if (!data.access_token) {
    throw new Error("Failed to get Zoho access token: " + JSON.stringify(data));
  }
  return data.access_token;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.botField || body.aG9uZXlwb3Q || body._hp) {
      return NextResponse.json({ success: true });
    }

    const { name, email, company, mobile, phone, message, inquiryType, leadSource, extra } = body;

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const trimmedName = typeof name === "string" ? name.trim() : "";
    if (trimmedName && trimmedName.length > 120) {
      return NextResponse.json({ error: "Name must be under 120 characters." }, { status: 400 });
    }

    const trimmedCompany = typeof company === "string" ? company.trim() : "";
    if (trimmedCompany && trimmedCompany.length > 200) {
      return NextResponse.json({ error: "Company name must be under 200 characters." }, { status: 400 });
    }

    const rawPhone = mobile || phone;
    let contactPhone = "";
    if (rawPhone && typeof rawPhone === "string") {
      const digits = rawPhone.replace(/\D/g, "");
      if (digits.length < 7 || digits.length > 16) {
        return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
      }
      contactPhone = rawPhone.trim();
    }

    if (message && typeof message === "string" && message.length > 5000) {
      return NextResponse.json({ error: "Message must be under 5,000 characters." }, { status: 400 });
    }

    const contactName = trimmedName || email.trim().split("@")[0] || "Website Lead";
    const contactCompany = trimmedCompany || "Individual / Not specified";

    const descriptionParts = [
      inquiryType ? `Inquiry / Type: ${inquiryType}` : null,
      message && typeof message === "string" ? `Message: ${message.trim()}` : null,
      extra
        ? `Additional Details:\n${typeof extra === "string" ? extra : JSON.stringify(extra, null, 2)}`
        : null,
    ].filter(Boolean);
    const description = descriptionParts.join("\n\n");

    const accessToken = await getAccessToken();
    const apiDomain = process.env.ZOHO_API_DOMAIN || "https://www.zohoapis.in";

    const zohoRes = await fetch(`${apiDomain}/crm/v2/Leads`, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            Last_Name: contactName,
            Email: email.trim().toLowerCase(),
            Company: contactCompany,
            Phone: contactPhone,
            Description: description,
            Lead_Source: leadSource || "Food Talk Website",
            Lead_Status: "Not Contacted",
            LEADCF1: "Food Talk",
          },
        ],
      }),
    });

    const zohoData = await zohoRes.json();
    if (
      zohoData.data?.[0]?.status === "success" ||
      zohoData.data?.[0]?.code === "SUCCESS"
    ) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Zoho API error", details: zohoData },
      { status: 500 }
    );
  } catch (err: any) {
    console.error("Zoho lead submission error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to submit lead" },
      { status: 500 }
    );
  }
}
