import { NextRequest, NextResponse } from "next/server";

async function getAccessToken(): Promise<string> {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "Zoho CRM environment variables (ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN) are not configured."
    );
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
    const {
      name,
      email,
      company,
      mobile,
      phone,
      message,
      inquiryType,
      leadSource,
      extra,
    } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const contactPhone = mobile || phone || "";
    const contactName = name?.trim() || email.split("@")[0] || "Website Lead";
    const contactCompany = company?.trim() || "Individual / Not specified";

    const descriptionParts = [
      inquiryType ? `Inquiry / Type: ${inquiryType}` : null,
      message ? `Message: ${message}` : null,
      extra ? `Additional Details:\n${typeof extra === "string" ? extra : JSON.stringify(extra, null, 2)}` : null,
    ].filter(Boolean);

    const description = descriptionParts.join("\n\n");

    const accessToken = await getAccessToken();

    const zohoRes = await fetch("https://www.zohoapis.in/crm/v2/Leads", {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            Last_Name: contactName,
            Email: email,
            Company: contactCompany,
            Phone: contactPhone,
            Description: description,
            Lead_Source: leadSource || "Food Talk India Website",
            Lead_Status: "Not Contacted",
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
