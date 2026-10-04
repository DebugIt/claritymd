"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      className="rounded-full border border-[#E3E8E4] bg-white px-3 py-1.5 text-sm font-medium text-[#10201D] transition hover:bg-[#EAF4EE]"
      aria-label={
        language === "en"
          ? "Switch to Arabic"
          : "Switch to English"
      }
    >
      {language === "en" ? "AR" : "EN"}
    </button>
  );
}