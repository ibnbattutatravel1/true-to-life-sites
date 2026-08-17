import { Link } from "@tanstack/react-router";
import { ArrowRight, Eye, EyeOff, Lock, Mail, UsersRound } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export function SignInCard() {
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    toast.success("Welcome back", { description: "Signing you in to Rafiq Workplace." });
  }

  return (
    <section className="glass-strong rounded-3xl p-6 sm:p-8">
      <h2 className="text-2xl font-extrabold sm:text-3xl">Welcome back</h2>
      <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
        Sign in to continue to your account
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <label className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-ring">
          <Mail className="h-5 w-5 shrink-0 text-primary" />
          <input
            type="email"
            required
            placeholder="Work email"
            className="min-w-0 flex-1 bg-transparent text-base outline-hidden placeholder:text-muted-foreground"
          />
        </label>

        <label className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-ring">
          <Lock className="h-5 w-5 shrink-0 text-primary" />
          <input
            type={show ? "text" : "password"}
            required
            placeholder="Password"
            className="min-w-0 flex-1 bg-transparent text-base outline-hidden placeholder:text-muted-foreground"
          />
          <button
            type="button"
            aria-label={show ? "Hide password" : "Show password"}
            onClick={() => setShow((v) => !v)}
            className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
          >
            {show ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
          </button>
        </label>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setRemember((v) => !v)}
            className="flex items-center gap-2.5 text-sm font-medium"
          >
            <span
              className={`grid h-5 w-5 shrink-0 place-items-center rounded-[6px] border-2 transition-colors ${
                remember ? "gradient-primary border-transparent" : "border-primary/40"
              }`}

            >
              {remember && (
                <svg viewBox="0 0 20 20" className="h-3 w-3 fill-primary-foreground">
                  <path d="M7.6 14.2 3.8 10.4l1.4-1.4 2.4 2.4 6.8-6.8 1.4 1.4z" />
                </svg>
              )}
            </span>
            Remember me
          </button>
          <Link
            to="/forgot-password"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="gradient-primary group flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-bold text-primary-foreground shadow-button transition-transform hover:-translate-y-0.5"
        >
          <span className="mx-auto">Sign in</span>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-foreground/95">
            <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" />
          </span>
        </button>

        <div className="flex items-center gap-4 py-1">
          <span className="h-px flex-1 bg-border" />
          <span className="text-sm text-muted-foreground">or</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <Link
          to="/setup-organization"
          className="glass flex w-full items-center justify-center gap-3 rounded-2xl border border-primary/40 px-6 py-4 text-base font-bold text-foreground transition-transform hover:-translate-y-0.5"
        >
          <UsersRound className="h-5 w-5 text-primary" />
          Set up your organization
        </Link>

        <Link
          to="/about"
          className="flex items-center justify-center gap-2 pt-1 text-sm font-semibold text-primary hover:underline sm:text-base"
        >
          Learn more about Rafiq Workplace <ArrowRight className="h-4 w-4" />
        </Link>
      </form>
    </section>
  );
}
