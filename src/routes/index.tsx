import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse } from "lucide-react";
import { PageHeader } from "@/components/Brand";
import { SignInCard } from "@/components/AuthCard";
import { HelpCard, SiteFooter } from "@/components/SiteFooter";
import {
  FloatingFeatureCards,
  HeroImage,
  MobileTrustStrip,
  PillarBar,
} from "@/components/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rafiq Workplace — Sign in to support workplace mental health" },
      {
        name: "description",
        content:
          "Rafiq Workplace helps organizations assess, understand, and improve the mental health and well-being of their teams. Sign in or set up your organization.",
      },
      { property: "og:title", content: "Rafiq Workplace — Stronger minds. Better workplaces." },
      {
        property: "og:description",
        content:
          "Confidential, science-backed assessments and actionable insights for healthier teams.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <PageHeader />

      <main className="px-5 pt-8 sm:px-8 lg:px-12">
        {/* Desktop / tablet layout */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] lg:items-start lg:gap-10">
          <div>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-primary">
              <HeartPulse className="h-4 w-4" /> A healthy workplace starts with you
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05]">
              Support mental well-being.
              <span className="block text-primary">Strengthen your people.</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground">
              Rafiq Workplace helps organizations assess, understand, and improve the mental
              health and well-being of their teams.
            </p>
            <div className="mt-8">
              <SignInCard />
            </div>
          </div>

          <div className="relative">
            <div className="h-[560px] xl:h-[640px]">
              <HeroImage />
            </div>
            <div className="absolute right-4 top-6">
              <FloatingFeatureCards />
            </div>
            <div className="-mt-24 relative z-10 pr-4">
              <PillarBar />
            </div>
          </div>
        </div>

        {/* Mobile / tablet layout */}
        <div className="space-y-6 lg:hidden">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-primary">
            <HeartPulse className="h-4 w-4" /> A healthy workplace starts with you
          </span>
          <div className="relative">
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              A healthy mind builds a stronger{" "}
              <span className="text-primary">workplace.</span>
            </h1>
            <p className="mt-4 max-w-sm text-base text-muted-foreground">
              We help organizations understand, support, and improve the mental health of their
              teams.
            </p>
          </div>
          <div className="h-64 sm:h-96">
            <HeroImage />
          </div>
          <MobileTrustStrip />
          <SignInCard />
          <HelpCard />
        </div>
      </main>

      <div className="mt-8 hidden px-12 lg:block">
        <HelpCard />
      </div>

      <SiteFooter />
    </div>
  );
}
