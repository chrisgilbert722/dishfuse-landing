import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, message: "Email required" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("Missing BREVO_API_KEY in environment");
      return NextResponse.json({ success: false, message: "Server not configured" }, { status: 500 });
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: name || "" },
        listIds: [2], // replace with your actual Brevo list ID
        updateEnabled: true,
      }),
    });

    const data = await res.json();
    console.log("Brevo response:", data);

    if (!res.ok) {
      return NextResponse.json({ success: false, message: data.message || "Brevo error" }, { status: res.status });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Brevo subscribe error:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
