"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Footer() {
  const { isArabic } = useLanguage();

  return (
    <footer className="border-t border-[var(--border)] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
          <div>
            <Link
              href="/"
              className="text-sm font-semibold"
            >
              ClarityMD
            </Link>

            <p className="mt-2 max-w-md text-xs leading-5 text-[var(--muted)]">
              {isArabic
                ? "خزنة طبية شخصية تساعدك على تنظيم تاريخك الصحي والعثور عليه ومشاركته."
                : "A personal medical vault for organizing, finding and sharing your health history."}
            </p>
          </div>

          <div className="text-xs leading-5 text-[var(--muted)] sm:max-w-md sm:text-end">
            {isArabic
              ? "ClarityMD ليست خدمة تشخيص طبي. المعلومات المعروضة هي لأغراض تنظيم السجلات والمعلومات فقط ولا تحل محل المشورة الطبية المتخصصة."
              : "ClarityMD is not a medical diagnosis service. Information shown is for record organization and informational purposes only and does not replace professional medical advice."}
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-5 text-[10px] text-[var(--muted)]">
          © {new Date().getFullYear()} ClarityMD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}