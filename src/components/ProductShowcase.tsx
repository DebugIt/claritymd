"use client";

import {
  Check,
  Clock3,
  FileText,
  LockKeyhole,
  Share2,
  UserRound,
} from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ProductShowcase() {
  const { isArabic } = useLanguage();

  const content = isArabic
    ? {
        eyebrow: "خزنتك الصحية",
        title: "سجلاتك. تحت سيطرتك.",
        description:
          "من أول تقرير إلى آخر وصفة، تحافظ ClarityMD على تاريخك الطبي منظماً وسهل الوصول والمشاركة.",
        vault: "الخزنة الطبية",
        timeline: "الخط الصحي",
        sharing: "المشاركة الآمنة",
        selected: "3 سجلات محددة",
        access: "الوصول لمدة 24 ساعة",
      }
    : {
        eyebrow: "THE MEDICAL VAULT",
        title: "Your records. Your control.",
        description:
          "From your first report to your latest prescription, ClarityMD keeps your health history organized, accessible and ready to share.",
        vault: "Medical vault",
        timeline: "Health timeline",
        sharing: "Secure sharing",
        selected: "3 records selected",
        access: "Access for 24 hours",
      };

  return (
    <section className="bg-[var(--text)] px-5 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.12em] text-[#7ed7c3]">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
            {content.title}
          </h2>

          <p className="mt-5 text-base leading-7 text-white/55">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Vault */}
          <div className="rounded-3xl bg-white p-4 text-[var(--text)] sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-[var(--muted)]">
                  {content.vault}
                </p>
                <h3 className="mt-1 text-xl font-semibold">
                  12 health records
                </h3>
              </div>

              <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--primary-light)]">
                <LockKeyhole className="size-5 text-[var(--primary)]" />
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["Blood Test", "Lab result", "18 Sep 2026"],
                ["Prescription", "Medication", "12 Sep 2026"],
                ["MRI Report", "Scan", "04 Aug 2026"],
                ["Consultation", "Doctor note", "21 Jul 2026"],
              ].map(([title, type, date]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[var(--border)] p-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex size-9 items-center justify-center rounded-xl bg-[var(--accent)]">
                      <FileText className="size-4 text-[var(--primary)]" />
                    </div>

                    <span className="text-[10px] text-[var(--muted)]">
                      {date}
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-semibold">{title}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    {type}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="rounded-3xl bg-[#18312c] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white/45">
                  {content.timeline}
                </p>
                <h3 className="mt-1 text-xl font-semibold">2026</h3>
              </div>

              <Clock3 className="size-5 text-[#7ed7c3]" />
            </div>

            <div className="relative mt-8 space-y-7 ps-5">
              <div className="absolute start-[5px] top-1 h-[calc(100%-10px)] w-px bg-white/10" />

              {[
                ["18 Sep", "Blood Test", "Lab"],
                ["12 Sep", "Prescription", "Medication"],
                ["04 Aug", "MRI Report", "Scan"],
                ["21 Jul", "Consultation", "Doctor"],
              ].map(([date, title, type]) => (
                <div key={date} className="relative">
                  <span className="absolute -start-[19px] top-1 size-2.5 rounded-full bg-[#7ed7c3]" />

                  <p className="text-[10px] text-white/40">
                    {date}
                  </p>

                  <p className="mt-1 text-sm font-medium">{title}</p>

                  <p className="mt-0.5 text-[10px] text-white/40">
                    {type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sharing */}
        <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-[#234b43]">
                <Share2 className="size-5 text-[#7ed7c3]" />
              </div>

              <h3 className="mt-5 text-2xl font-semibold">
                {content.sharing}
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/50">
                Share only the records someone needs. Keep everything else
                private.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 text-[var(--text)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[var(--primary-light)]">
                    <UserRound className="size-5 text-[var(--primary)]" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Dr. Mehta</p>
                    <p className="text-xs text-[var(--muted)]">
                      Healthcare professional
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-[10px] font-semibold text-[var(--primary)]">
                  {content.access}
                </span>
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  ["Blood test", true],
                  ["Prescription", true],
                  ["MRI report", true],
                  ["Insurance document", false],
                ].map(([name, selected]) => (
                  <div
                    key={name as string}
                    className="flex items-center gap-2 rounded-xl bg-[var(--background)] px-3 py-2.5"
                  >
                    <span
                      className={`flex size-4 items-center justify-center rounded ${
                        selected
                          ? "bg-[var(--primary)] text-white"
                          : "border border-[var(--border)]"
                      }`}
                    >
                      {selected && <Check className="size-3" />}
                    </span>

                    <span className="text-xs">{name as string}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
                <span className="text-xs text-[var(--muted)]">
                  {content.selected}
                </span>

                <button className="rounded-full bg-[var(--text)] px-4 py-2 text-xs font-medium text-white">
                  Create secure share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}