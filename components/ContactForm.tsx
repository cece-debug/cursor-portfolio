"use client";

import { useState } from "react";

const OWNER_EMAIL = "miles.chao84@gmail.com";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${email}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${email}`);
    window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Your email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-md border px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Write your message here..."
          className="w-full rounded-md border px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-700"
      >
        Send Email
      </button>
      <p className="text-sm text-zinc-500">
        Opens your email app with the message pre-filled and addressed to{" "}
        {OWNER_EMAIL}.
      </p>
    </form>
  );
}