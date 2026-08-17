import { Link } from "@tanstack/react-router";
import { Headphones, Lock, Mail, ChevronRight, ShieldCheck } from "lucide-react";

export function HelpCard() {
  return (
    <Link
      to="/support"
      className="glass grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-3xl p-5 transition-transform hover:-translate-y-0.5"
    >
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent">
        <Headphones className="h-7 w-7 text-primary" />
      </span>
      <span className="min-w-0">
        <span className="block text-lg font-extrabold">Need help?</span>
        <span className="block truncate text-sm text-muted-foreground">
          We're here to answer your questions.
        </span>
        <span className="mt-1 flex min-w-0 items-center gap-2 text-sm font-semibold text-primary">
          <Mail className="h-4 w-4 shrink-0" />
          <span className="truncate">support@rafiqworkplace.com</span>
        </span>
      </span>
      <ChevronRight className="h-5 w-5 shrink-0 text-primary" />
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-8 grid gap-6 px-5 pb-10 sm:px-8 lg:grid-cols-[auto_auto_minmax(0,1fr)_auto] lg:items-center lg:gap-10 lg:px-12">
      <div className="flex items-start justify-center gap-3 lg:justify-start">
        <Lock className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
        <p className="text-sm">
          <span className="block font-extrabold">Your privacy is our priority.</span>
          <span className="block text-muted-foreground">We never share your data.</span>
        </p>
      </div>

      <div className="hidden items-start gap-3 lg:flex">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent">
          <ShieldCheck className="h-5 w-5 text-primary" />
        </span>
        <p className="text-sm">
          <span className="block font-extrabold">Secure &amp; Compliant</span>
          <span className="block text-muted-foreground">
            Meet global security and privacy standards.
          </span>
        </p>
      </div>

      <div className="hidden text-right text-sm lg:block">
        <span className="block font-extrabold">Questions before you sign up?</span>
        <span className="block text-muted-foreground">We're here to help.</span>
      </div>

      <a
        href="mailto:support@rafiqworkplace.com"
        className="hidden items-center gap-3 text-base font-semibold text-primary hover:underline lg:flex"
      >
        <Mail className="h-5 w-5" />
        support@rafiqworkplace.com
      </a>
    </footer>
  );
}
