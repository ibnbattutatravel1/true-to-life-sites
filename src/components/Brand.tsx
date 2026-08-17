import { Link } from "@tanstack/react-router";
import { Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/rafiq-logo.png";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-3">
      <img
        src={logo}
        alt="Rafiq Workplace logo"
        width={512}
        height={512}
        className="h-11 w-11 shrink-0 rounded-2xl object-cover shadow-button sm:h-14 sm:w-14"
      />
      <span className="min-w-0">
        <span className="block truncate text-lg font-extrabold sm:text-2xl">
          Rafiq Workplace
        </span>
        {!compact && (
          <span className="block truncate text-xs font-semibold text-primary sm:text-sm">
            Stronger minds. Better workplaces.
          </span>
        )}
      </span>
    </Link>
  );
}

const languages = ["English", "العربية", "Français"];

export function LanguagePicker() {
  const [lang, setLang] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="glass-strong flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 sm:px-5 sm:py-3 sm:text-base"
      >
        <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
        {lang}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="glass-strong absolute right-0 z-30 mt-2 w-40 overflow-hidden rounded-2xl p-1 text-sm font-semibold">
          {languages.map((l) => (
            <li key={l}>
              <button
                type="button"
                onClick={() => {
                  setLang(l);
                  setOpen(false);
                }}
                className="w-full rounded-xl px-3 py-2 text-left hover:bg-accent hover:text-accent-foreground"
              >
                {l}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function PageHeader() {
  return (
    <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 pt-6 sm:px-8 lg:px-12 lg:pt-10">
      <BrandMark />
      <LanguagePicker />
    </header>
  );
}
