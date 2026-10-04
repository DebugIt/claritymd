"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function AISection() {
  const { isArabic } = useLanguage();

  const content = isArabic
    ? {
        eyebrow: "طبقة الذكاء",
        title: "سجلاتك، أصبحت قابلة للبحث.",
        description:
          "اسأل عن تاريخك الصحي بلغة طبيعية. ClarityMD يساعدك على العثور على المعلومات الموجودة في سجلاتك وفهمها.",
        question: "ما الأدوية التي وُصفت لي العام الماضي؟",
        answer:
          "لديك وصفتان مسجلتان في سجلك لعام 2026.",
        note: "مصدر الإجابة: سجلاتك الطبية",
      }
    : {
        eyebrow: "THE INTELLIGENCE LAYER",
        title: "Your records, made searchable.",
        description:
          "Ask questions about your health history in natural language. ClarityMD helps you find and understand information already in your records.",
        question: "What medicines was I prescribed last year?",
        answer:
          "You have two prescriptions recorded in your health history in 2026.",
        note: "Answer based on your medical records",
      };

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="flex size-11 items-center justify-center rounded-2xl bg-[var(--primary-light)]">
            <Sparkles className="size-5 text-[var(--primary)]" />
          </div>

          <p className="mt-7 text-xs font-semibold tracking-[0.12em] text-[var(--primary)]">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
            {content.title}
          </h2>

          <p className="mt-5 max-w-lg text-base leading-7 text-[var(--muted)]">
            {content.description}
          </p>

          <div className="mt-7 flex items-center gap-2 text-sm font-medium text-[var(--primary)]">
            Search your own history
            <ArrowUpRight className="size-4" />
          </div>
        </div>

        <div className="rounded-[28px] border border-[var(--border)] bg-white p-4 shadow-[0_20px_60px_rgba(16,32,29,0.08)] sm:p-6">
          <div className="rounded-2xl bg-[var(--background)] p-5">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-[var(--primary)]">
                <Sparkles className="size-4 text-white" />
              </div>

              <span className="text-sm font-semibold">
                Ask your health history
              </span>
            </div>

            <div className="mt-5 rounded-2xl border border-[var(--border)] bg-white p-4">
              <p className="text-sm leading-6">{content.question}</p>
            </div>

            <div className="mt-3 rounded-2xl bg-[var(--primary)] p-5 text-white">
              <p className="text-sm leading-6">{content.answer}</p>

              <div className="mt-5 border-t border-white/15 pt-3">
                <p className="text-[10px] text-white/50">
                  {content.note}
                </p>
              </div>
            </div>

            <p className="mt-4 text-center text-[10px] text-[var(--muted)]">
              ClarityMD helps you navigate your records — it does not
              diagnose medical conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}