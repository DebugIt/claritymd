"use client";

import {
  FileWarning,
  FolderOpen,
  ImageIcon,
  Share2,
} from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Problem() {
  const { isArabic } = useLanguage();

  const content = isArabic
    ? {
        eyebrow: "المشكلة",
        title: "تاريخك الطبي لا يجب أن يعيش في خمسة أماكن مختلفة.",
        description:
          "وصفات في واتساب. تقارير في البريد الإلكتروني. صور في هاتفك. ملفات ورقية في المنزل. عندما تحتاج إلى شيء مهم، يصبح العثور عليه أصعب مما ينبغي.",
        items: [
          {
            title: "سجلات متفرقة",
            description: "مستنداتك موزعة بين تطبيقات وأجهزة ومؤسسات مختلفة.",
          },
          {
            title: "وصفات مفقودة",
            description: "من السهل أن تضيع وصفة تحتاج إليها لاحقاً.",
          },
          {
            title: "تقارير مدفونة",
            description: "الملف موجود، لكن العثور عليه يستغرق وقتاً.",
          },
          {
            title: "مشاركة صعبة",
            description: "ليس من السهل إرسال السجل الصحيح للشخص الصحيح.",
          },
        ],
      }
    : {
        eyebrow: "THE PROBLEM",
        title: "Your medical history shouldn't live in five different places.",
        description:
          "Prescriptions in WhatsApp. Reports in email. Scans in your phone gallery. Paper files at home. When you need something important, finding it becomes harder than it should be.",
        items: [
          {
            title: "Scattered records",
            description:
              "Your documents are spread across apps, devices and providers.",
          },
          {
            title: "Lost prescriptions",
            description:
              "It's easy to lose the prescription you need months later.",
          },
          {
            title: "Buried reports",
            description:
              "The file exists, but finding it takes unnecessary effort.",
          },
          {
            title: "Difficult sharing",
            description:
              "Sharing the right records with the right person isn't simple.",
          },
        ],
      };

  const icons = [FolderOpen, FileWarning, ImageIcon, Share2];

  return (
    <section
      id="why-clarity"
      className="border-y border-[var(--border)] bg-white px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.12em] text-[var(--primary)]">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
            {content.title}
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--muted)]">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="bg-white p-7"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--accent)]">
                  <Icon className="size-5 text-[var(--primary)]" />
                </div>

                <h3 className="mt-6 font-semibold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}