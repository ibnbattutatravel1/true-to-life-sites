import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import { type FormEvent } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/Brand";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset your password — Rafiq Workplace" },
      {
        name: "description",
        content:
          "Enter your work email and we'll send you a secure link to reset your Rafiq Workplace password.",
      },
      { property: "og:title", content: "Reset your password — Rafiq Workplace" },
      { property: "og:description", content: "Secure password recovery for your account." },
    ],
  }),
  component: ForgotPassword,
});

function ForgotPassword() {
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    toast.success("Reset link sent", { description: "Check your inbox for the secure link." });
  }

  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader />
      <main className="mx-auto w-full max-w-lg flex-1 px-5 pt-12 sm:px-8">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to sign in
        </Link>
        <section className="glass-strong rounded-3xl p-6 sm:p-8">
          <h1 className="text-3xl font-extrabold">Forgot password?</h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Enter your work email and we'll send you a secure reset link.
          </p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <label className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-ring">
              <Mail className="h-5 w-5 shrink-0 text-primary" />
              <input
                required
                type="email"
                placeholder="Work email"
                className="min-w-0 flex-1 bg-transparent text-base outline-hidden placeholder:text-muted-foreground"
              />
            </label>
            <button
              type="submit"
              className="gradient-primary w-full rounded-2xl px-6 py-4 text-base font-bold text-primary-foreground shadow-button transition-transform hover:-translate-y-0.5"
            >
              Send reset link
            </button>
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
