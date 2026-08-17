import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartPulse } from "lucide-react";
import { PageHeader } from "@/components/Brand";
import { HeroImage, PillarBar, MobileTrustStrip } from "@/components/Hero";
import { HelpCard, SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rafiq Workplace — Stronger minds, better workplaces" },
      {
        name: "description",
        content:
          "Learn how Rafiq Workplace measures, protects, and improves employee mental health with validated assessments and actionable insights.",
      },
      { property: "og:title", content: "About Rafiq Workplace" },
      {
        property: "og:description",
        content: "How we help organizations build healthier, more resilient teams.",
      },
    ],
  }),
  component: About,
});

const steps = [
  {
    step: "01",
    title: "Assess",
    body: "Short, validated check-ins measure well-being across your organization without exposing individuals.",
  },
  {
    step: "02",
    title: "Understand",
    body: "Anonymised dashboards reveal where teams thrive and where support is needed most.",
  },
  {
    step: "03",
    title: "Act",
    body: "Guided recommendations turn insight into programmes your people actually feel.",
  },
];

function About() {
  return (
    <div className="min-h-screen">
      <PageHeader />
      <main className="space-y-8 px-5 pt-8 sm:px-8 lg:px-12">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-primary">
          <HeartPulse className="h-4 w-4" /> A healthy workplace starts with you
        </span>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              We build workplaces where{" "}
              <span className="text-primary">people can breathe.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground">
              Rafiq Workplace combines clinical science with everyday practicality, so leaders
              can support mental health with evidence rather than guesswork — and employees stay
              fully protected.
            </p>
            <Link
              to="/setup-organization"
              className="gradient-primary mt-8 inline-flex items-center gap-3 rounded-2xl px-6 py-4 text-base font-bold text-primary-foreground shadow-button transition-transform hover:-translate-y-0.5"
            >
              Set up your organization <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="h-72 sm:h-96 lg:h-[520px]">
            <HeroImage />
          </div>
        </div>

        <MobileTrustStrip />

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="glass-strong rounded-3xl p-6">
              <span className="text-gradient-primary text-4xl font-extrabold">{s.step}</span>
              <h2 className="mt-3 text-xl font-extrabold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <PillarBar />
        <HelpCard />
      </main>
      <SiteFooter />
    </div>
  );
}
