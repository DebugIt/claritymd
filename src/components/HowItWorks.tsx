"use client";

import { ArrowUpRight, FolderPlus, ListTree, Share } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function HowItWorks() {
  const { isArabic } = useLanguage();

  const content = isArabic
    ? {
        eyebrow: "كيف تعمل",
        title: "بسيطة من البداية إلى النهاية.",
        description:
          "احتفظ بتاريخك الطبي منظماً، واعثر على ما تحتاجه، وشارك فقط ما تريد مشاركته.",
        steps: [
          {
            number: "01",
            title: "خزّن",
            description:
              "احتفظ بتقاريرك الطبية ووصفاتك وفحوصاتك ووثائقك الصحية المهمة في مكان آمن واحد.",
          },
          {
            number: "02",
            title: "نظّم",
            description:
              "تنظم ClarityMD سجلاتك حسب الفئات وتعرضها في خط زمني صحي بسيط يسهل التنقل فيه.",
          },
          {
            number: "03",
            title: "شارك",
            description:
              "شارك سجلات محددة مع طبيبك أو عائلتك أو مقدم الرعاية الصحية دون مشاركة تاريخك الطبي بالكامل.",
          },
        ],
        link: "استكشف الخزنة",
      }
    : {
        eyebrow: "HOW IT WORKS",
        title: "Simple from record to retrieval.",
        description:
          "Keep your health history organized, find what you need, and share only what you choose.",
        steps: [
          {
            number: "01",
            title: "Store",
            description:
              "Keep your medical reports, prescriptions, scans and important health documents together in one secure place.",
          },
          {
            number: "02",
            title: "Organize",
            description:
              "ClarityMD organizes your records into categories and a simple health timeline, making your history easy to navigate.",
          },
          {
            number: "03",
            title: "Share",
            description:
              "Share selected records with your doctor, family or healthcare provider without handing over your entire medical history.",
          },
        ],
        link: "Explore the vault",
      };

  const icons = [FolderPlus, ListTree, Share];

  return (
    <section
      id="how-it-works"
      className="px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.12em] text-[var(--primary)]">
              {content.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {content.title}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {content.steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <article
                key={step.number}
                className="group rounded-3xl border border-[var(--border)] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-[var(--primary)]">
                    {step.number}
                  </span>

                  <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--accent)] transition group-hover:bg-[var(--primary-light)]">
                    <Icon className="size-5 text-[var(--primary)]" />
                  </div>
                </div>

                <h3 className="mt-14 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {step.description}
                </p>

                {index === 2 && (
                  <div className="mt-8 flex items-center gap-1 text-sm font-medium text-[var(--primary)]">
                    {content.link}
                    <ArrowUpRight className="size-4" />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}