"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
            Nom
          </label>
          <input
            name="name"
            type="text"
            required
            className="w-full border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-[#968370] bg-transparent transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-[#968370] bg-transparent transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
          Sujet
        </label>
        <input
          name="subject"
          type="text"
          required
          className="w-full border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-[#968370] bg-transparent transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-[#968370] bg-transparent transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="uppercase tracking-widest text-xs font-bold px-8 py-4 bg-stone-900 text-white hover:bg-[#968370] transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Envoi…" : "Envoyer le message"}
      </button>

      {status === "success" && (
        <p className="text-emerald-700 text-sm italic">
          Message envoyé, nous vous répondrons rapidement.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm italic">
          Une erreur est survenue, veuillez réessayer.
        </p>
      )}
    </form>
  );
}
