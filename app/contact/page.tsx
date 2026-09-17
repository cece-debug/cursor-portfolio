import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/your-handle",
    label: "linkedin.com/in/your-handle",
  },
  {
    name: "Email",
    href: "miles.chao84@gmail.com",
    label: "miles.chao84@gmail.com",
  },
  {
    name: "Phone",
    href: "tel:+1 (424) 392-5138",
    label: "+1 (424) 392-5138",
  },
  {
    name: "Discord",
    href: "https://discord.com/users/your-discord-id",
    label: "Miles",
  },
];

export default function Contact() {
  return (
    <section className="space-y-10">
      <section>
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="mt-2 text-zinc-600">
          Send me a message and I will get back to you.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Email Me</h2>
        <div className="mt-4 max-w-md space-y-4">
          <ContactForm />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Socials</h2>
        <ul className="mt-4 space-y-2">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="font-medium text-blue-600 underline"
              >
                {social.name}: {social.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}