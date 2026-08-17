import { createFileRoute } from "@tanstack/react-router";
import { Headphones, Mail, MessageCircle, Phone } from "lucide-react";
import { type FormEvent } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/Brand";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — Rafiq Workplace" },
      {
        name: "description",
        content:
          "Questions about Rafiq Workplace? Reach our team by email, phone, or live chat, or send us a message.",
      },
      { property: "og:title", content: "Support — Rafiq Workplace" },
      { property: "og:description", content: "We're here to answer your questions." },
    ],
  }),
  component: Support,
});

const channels = [
  { icon: Mail, title: "Email us", body: "support@rafiqworkplace.com" },
  { icon: Phone, title: "Call us", body: "+1 (555) 014-2280" },
  { icon: MessageCircle, title: "Live chat", body: "Sun–Thu, 9:00 – 18:00" },
];

function Support() {
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    toast.success("Message sent", { description: "Our team will reply within one business day." });
  }

  return (
    <div className="min-h-screen">
      <PageHeader />
      <main className="mx-auto max-w-5xl space-y-8 px-5 pt-10 sm:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent">
            <Headphones className="h-7 w-7 text-primary" />
          </span>
          <div className="min-w-0">
            <h1 className="text-3xl font-extrabold sm:text-4xl">Need help?</h1>
            <p className="text-sm text-muted-foreground sm:text-base">
              We're here to answer your questions.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {channels.map(({ icon: Icon, title, body }) => (
            <div key={title} className="glass rounded-3xl p-5">
              <Icon className="h-6 w-6 text-primary" />
              <p className="mt-3 font-extrabold">{title}</p>
              <p className="truncate text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="glass-strong space-y-4 rounded-3xl p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold">Send us a message</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Full name"
              className="glass w-full rounded-2xl px-4 py-3.5 text-base outline-hidden placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
            />
            <input
              required
              type="email"
              placeholder="Work email"
              className="glass w-full rounded-2xl px-4 py-3.5 text-base outline-hidden placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder="How can we help?"
            className="glass w-full rounded-2xl px-4 py-3.5 text-base outline-hidden placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            className="gradient-primary w-full rounded-2xl px-6 py-4 text-base font-bold text-primary-foreground shadow-button transition-transform hover:-translate-y-0.5"
          >
            Send message
          </button>
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}
