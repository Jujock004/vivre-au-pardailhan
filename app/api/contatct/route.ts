import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Champs manquants." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Contact Pardailhan <contact@tondomaine.fr>",
    to: "julien.joecker.dev@gmail.com",
    replyTo: email,
    subject: `[Contact] ${subject}`,
    text: `Nom : ${name}\nEmail : ${email}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "Échec de l'envoi." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
