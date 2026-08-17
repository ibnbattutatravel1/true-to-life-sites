import { BrainCircuit, HeartHandshake, ShieldCheck, TrendingUp } from "lucide-react";
import hero from "@/assets/hero-sunrise.jpg";

const floatingCards = [
  {
    icon: ShieldCheck,
    title: "Confidential\n& Secure",
    body: "Your data is encrypted and always protected.",
  },
  {
    icon: BrainCircuit,
    title: "Science-Backed\nAssessments",
    body: "Validated tools to measure what truly matters.",
  },
  {
    icon: TrendingUp,
    title: "Actionable\nInsights",
    body: "Turn data into meaningful action for your team.",
  },
];

export const pillars = [
  {
    icon: HeartHandshake,
    title: "Employee Well-being at the Core",
    body: "Understand and support your team better.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Decisions",
    body: "Make informed decisions that drive real impact.",
  },
  {
    icon: BrainCircuit,
    title: "Build a Healthier Workplace",
    body: "Foster a culture of care, trust, and resilience.",
  },
  {
    icon: ShieldCheck,
    title: "Safe. Private. Trusted.",
    body: "We follow the highest security standards.",
  },
];

export function HeroImage() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl">
      <img
        src={hero}
        alt="A person sitting on a mountain at sunrise, reflecting calmly"
        width={1280}
        height={1408}
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/40 via-transparent to-background/50" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/70" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25" />
    </div>
  );
}

export function FloatingFeatureCards() {
  return (
    <div className="flex flex-col gap-4">
      {floatingCards.map(({ icon: Icon, title, body }) => (
        <div key={title} className="glass-strong w-64 rounded-3xl p-4">
          <div className="flex min-w-0 items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent">
              <Icon className="h-5 w-5 text-primary" />
            </span>
            <div className="min-w-0">
              <p className="whitespace-pre-line text-sm font-extrabold leading-tight">{title}</p>
              <p className="mt-1.5 text-xs text-muted-foreground">{body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PillarBar({ dark = true }: { dark?: boolean }) {
  return (
    <div
      className={`${dark ? "glass-dark text-primary-foreground" : "glass"} grid gap-6 rounded-3xl p-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/20`}
    >
      {pillars.map(({ icon: Icon, title, body }) => (
        <div key={title} className="min-w-0 lg:px-6">
          <div className="flex min-w-0 items-start gap-3">
            <Icon className={`h-6 w-6 shrink-0 ${dark ? "" : "text-primary"}`} />
            <p className="text-sm font-extrabold leading-snug">{title}</p>
          </div>
          <p className={`mt-3 text-sm ${dark ? "opacity-80" : "text-muted-foreground"}`}>{body}</p>
        </div>
      ))}
    </div>
  );
}

export function MobileTrustStrip() {
  const items = [
    { icon: ShieldCheck, title: "Confidential", body: "Your data is safe and encrypted" },
    { icon: BrainCircuit, title: "Science-Backed", body: "Validated tools that truly matter" },
    { icon: TrendingUp, title: "Actionable", body: "Insights that drive real impact" },
  ];
  return (
    <div className="glass grid gap-5 rounded-3xl p-5 sm:grid-cols-3 sm:divide-x sm:divide-border">
      {items.map(({ icon: Icon, title, body }) => (
        <div key={title} className="flex min-w-0 items-center gap-3 sm:px-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent">
            <Icon className="h-5 w-5 text-primary" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-extrabold">{title}</p>
            <p className="text-xs text-muted-foreground">{body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
