import { NextRequest, NextResponse } from "next/server";

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (message.trim().length < 20) {
      return NextResponse.json(
        { error: "Message must be at least 20 characters" },
        { status: 400 }
      );
    }

    if (process.env.WEB3FORMS_KEY) {
      const formResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_KEY,
          name,
          email,
          message,
        }),
      });

      if (!formResponse.ok) {
        return NextResponse.json(
          { error: "Failed to send message" },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true });
    }

    console.log("Contact form submission (no email service configured):", {
      name,
      email,
      message,
    });

    return NextResponse.json({
      success: true,
      info: "Message logged. Set WEB3FORMS_KEY in .env.local to send real emails.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
