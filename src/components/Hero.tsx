"use client";

import { ArrowDown, Check, FileText, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Hero() {
  const { isArabic } = useLanguage();

  const content = isArabic
    ? {
        eyebrow: "خزنة سجلك الطبي الشخصية",
        title: "تاريخك الصحي. في مكان واحد.",
        description:
          "تجمع ClarityMD تقاريرك الطبية ووصفاتك وفحوصاتك ووثائقك الصحية في مكان آمن ومنظم، لتجد ما تحتاجه وتشاركه عندما يكون الأمر مهماً.",
        primary: "انضم لقائمة الانتظار",
        secondary: "اكتشف كيف تعمل",
        vault: "خزنتك الطبية",
        recent: "السجلات الأخيرة",
        timeline: "خطك الصحي",
      }
    : {
        eyebrow: "YOUR PERSONAL MEDICAL VAULT",
        title: "Your health history. In one place.",
        description:
          "ClarityMD securely brings your medical reports, prescriptions, scans and health documents together — so you can find what you need and share it when it matters.",
        primary: "Join the waitlist",
        secondary: "See how it works",
        vault: "Your medical vault",
        recent: "Recent records",
        timeline: "Health timeline",
      };

  return (
    <section className="px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:px-12 lg:pb-28 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-[11px] font-medium tracking-[0.08em] text-[var(--muted)]">
            <span className="size-1.5 rounded-full bg-[var(--primary)]" />
            {content.eyebrow}
          </div>

          <h1 className="max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--text)] sm:text-6xl lg:text-[76px]">
            {content.title}
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#waitlist"
              className="rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
            >
              {content.primary}
            </a>

            <a
              href="#how-it-works"
              className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-5 py-3.5 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--accent)]"
            >
              {content.secondary}
              <ArrowDown className="size-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[var(--muted)]">
            <span className="flex items-center gap-1.5">
              <Check className="size-3.5 text-[var(--primary)]" />
              Your records, your control
            </span>

            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-[var(--primary)]" />
              Secure by design
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 rounded-[40px] bg-[var(--primary-light)] opacity-60 blur-3xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-white p-3 shadow-[0_25px_80px_rgba(16,32,29,0.10)]">
            <div className="rounded-[20px] bg-[var(--background)] p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[var(--muted)]">
                    {content.vault}
                  </p>
                  <p className="mt-1 text-lg font-semibold">
                    Good morning, Ronak
                  </p>
                </div>

                <div className="flex size-9 items-center justify-center rounded-full bg-[var(--primary-light)]">
                  <ShieldCheck className="size-4 text-[var(--primary)]" />
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_0.8fr]">
                <div className="rounded-2xl border border-[var(--border)] bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-[var(--muted)]">
                      {content.recent}
                    </p>
                    <FileText className="size-4 text-[var(--muted)]" />
                  </div>

                  <div className="mt-4 space-y-3">
                    {[
                      ["Blood Test", "18 Sep 2026"],
                      ["Prescription", "12 Sep 2026"],
                      ["MRI Report", "04 Aug 2026"],
                    ].map(([name, date]) => (
                      <div
                        key={name}
                        className="flex items-center justify-between rounded-xl bg-[var(--background)] px-3 py-2.5"
                      >
                        <div>
                          <p className="text-xs font-medium">{name}</p>
                          <p className="mt-0.5 text-[10px] text-[var(--muted)]">
                            {date}
                          </p>
                        </div>

                        <span className="size-2 rounded-full bg-[var(--primary)]" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-[var(--text)] p-4 text-white">
                  <p className="text-xs text-white/50">
                    {content.timeline}
                  </p>

                  <div className="relative mt-5 space-y-5 ps-4">
                    <div className="absolute start-[3px] top-1 h-[calc(100%-8px)] w-px bg-white/15" />

                    {[
                      ["Sep 18", "Blood Test"],
                      ["Sep 12", "Prescription"],
                      ["Aug 04", "MRI Report"],
                      ["Jul 21", "Consultation"],
                    ].map(([date, name]) => (
                      <div key={date} className="relative">
                        <span className="absolute -start-[18px] top-1 size-2 rounded-full bg-[#7ed7c3]" />
                        <p className="text-[10px] text-white/45">
                          {date}
                        </p>
                        <p className="mt-0.5 text-xs font-medium">
                          {name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-3 rounded-2xl border border-[var(--border)] bg-white p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium">
                      Ask your health history
                    </p>
                    <p className="mt-1 text-[11px] text-[var(--muted)]">
                      “When was my last blood test?”
                    </p>
                  </div>

                  <div className="rounded-full bg-[var(--primary-light)] px-3 py-1.5 text-[10px] font-semibold text-[var(--primary)]">
                    Ask Clarity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}