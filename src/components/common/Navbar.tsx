"use client";

import Link from "next/link";
import { ArrowUpRight, UserRound } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { LanguageToggle } from "../LanguageToggle";

export function Navbar() {
  const { isArabic } = useLanguage();
  const { isLoaded, userId } = useAuth();

  const labels = isArabic
    ? {
        how: "كيف تعمل",
        why: "لماذا ClarityMD",
        waitlist: "انضم لقائمة الانتظار",
        login: "تسجيل الدخول",
      }
    : {
        how: "How it works",
        why: "Why ClarityMD",
        waitlist: "Join waitlist",
        login: "Log in",
      };

  return (
    <header className="px-5 pt-5 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[var(--border)] bg-white/80 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-5">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="ClarityMD home"
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white">
            C
          </span>

          <span className="text-[15px] font-semibold tracking-tight">
            ClarityMD
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
          <a
            href="#how-it-works"
            className="transition hover:text-[var(--text)]"
          >
            {labels.how}
          </a>

          <a
            href="#why-clarity"
            className="transition hover:text-[var(--text)]"
          >
            {labels.why}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle />

          {isLoaded &&
            (userId ? (
              <Link
                href="/dashboard"
                aria-label={isArabic ? "لوحة التحكم" : "Dashboard"}
                className="flex size-10 items-center justify-center rounded-full text-(--text) transition hover:bg-(--accent)"
              >
                <UserRound className="size-5" />
              </Link>
            ) : (
              <Link
                href="/sign-in"
                className="hidden rounded-full px-3 py-2 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--accent)] sm:block"
              >
                {labels.login}
              </Link>
            ))}

          <a
            href="#waitlist"
            className="flex items-center gap-1 rounded-full bg-[var(--text)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            {labels.waitlist}
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}