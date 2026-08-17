import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Building2, Mail, User, Users } from "lucide-react";
import { type FormEvent } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/Brand";
import { PillarBar } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/setup-organization")({
  head: () => ({
    meta: [
      { title: "Set up your organization — Rafiq Workplace" },
      {
        name: "description",
        content:
          "Create your Rafiq Workplace organization account and start measuring and improving team well-being in minutes.",
      },
      { property: "og:title", content: "Set up your organization — Rafiq Workplace" },
      {
        property: "og:description",
        content: "Onboard your team with confidential, science-backed well-being assessments.",
      },
    ],
  }),
  component: SetupOrganization,
});

function SetupOrganization() {
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    toast.success("Organization created", {
      description: "We've emailed you the next steps to invite your team.",
    });
  }

  return (
    <div className="min-h-screen">
      <PageHeader />
      <main className="mx-auto w-full max-w-3xl space-y-8 px-5 pt-10 sm:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to sign in
        </Link>

        <div>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Set up your <span className="text-primary">organization.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Tell us a little about your team. Setup takes two minutes, and your people's data
            stays confidential from day one.
          </p>
        </div>

        <form onSubmit={onSubmit} className="glass-strong space-y-4 rounded-3xl p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field icon={Building2} placeholder="Organization name" />
            <Field icon={User} placeholder="Your full name" />
            <Field icon={Mail} placeholder="Work email" type="email" />
            <label className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-ring">
              <Users className="h-5 w-5 shrink-0 text-primary" />
              <select
                required
                defaultValue=""
                className="min-w-0 flex-1 bg-transparent text-base outline-hidden"
              >
                <option value="" disabled>
                  Team size
                </option>
                <option>1 – 50</option>
                <option>51 – 250</option>
                <option>251 – 1000</option>
                <option>1000+</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            className="gradient-primary group flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-bold text-primary-foreground shadow-button transition-transform hover:-translate-y-0.5"
          >
            Create organization
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </form>

        <PillarBar />
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({
  icon: Icon,
  placeholder,
  type = "text",
}: {
  icon: typeof Mail;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-ring">
      <Icon className="h-5 w-5 shrink-0 text-primary" />
      <input
        required
        type={type}
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-base outline-hidden placeholder:text-muted-foreground"
      />
    </label>
  );
}
