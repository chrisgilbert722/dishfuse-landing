import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, name, pos } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Valid email required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "Missing Brevo API key" },
        { status: 500 }
      );
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
        attributes: { FIRSTNAME: name || "", POS: pos || "", SOURCE: "DishFuse" },
        listIds: [2],
        updateEnabled: true,
      }),
    });

    const data = await res.json();
    if (!res.ok) return NextResponse.json(data, { status: res.status });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
