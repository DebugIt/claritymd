"use client";

import {
  ArrowUpRight,
  CalendarDays,
  FileText,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";

type DashboardContentProps = {
  email: string;
  createdAt: string;
};

export function DashboardContent({
  email,
  createdAt,
}: DashboardContentProps) {
  const { language } = useLanguage();

  const isArabic = language === "ar";

  const memberSince = new Date(createdAt).toLocaleDateString(
    isArabic ? "ar-IN" : "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const content = isArabic
    ? {
        personalVault: "خزنتك الصحية الشخصية",
        welcome: "مرحبًا بك في ClarityMD",
        title: "تاريخك الصحي،",
        titleSecond: "في مكان واحد.",
        description:
          "خزنتك الطبية الشخصية جاهزة. احتفظ بسجلاتك الصحية المهمة منظمة، ويمكنك الوصول إليها والتحكم فيها بسهولة.",
        yourAccount: "حسابك",
        accountDetails: "تفاصيل الحساب",
        email: "البريد الإلكتروني",
        memberSince: "عضو منذ",
        recordsControl: "سجلاتك. تحكمك.",
        privacyDescription:
          "صُممت ClarityMD لمساعدتك على تنظيم تاريخك الصحي ومنحك التحكم الكامل فيما تشاركه.",
        privacyFirst: "الخصوصية أولًا",
        medicalVault: "خزنتك الطبية",
        healthRecords: "سجلاتك الصحية",
        comingSoon: "قريبًا",
        medicalReports: "التقارير الطبية",
        reports: "تقارير",
        prescriptions: "الوصفات الطبية",
        medications: "الأدوية",
        labResults: "نتائج المختبر",
        laboratory: "مختبر",
        doctorNotes: "ملاحظات الطبيب",
        consultations: "استشارات",
        healthTimeline: "الخط الزمني الصحي",
        timelineDescription:
          "شاهد تاريخك الطبي بترتيب زمني.",
        askHistory: "اسأل عن تاريخك الصحي",
        askDescription:
          "اعثر على المعلومات عبر سجلاتك الخاصة.",
        disclaimer:
          "ClarityMD هو منظم شخصي للسجلات الصحية وليس بديلًا عن المشورة الطبية المهنية أو التشخيص.",
      }
    : {
        personalVault: "Personal vault",
        welcome: "Welcome to ClarityMD",
        title: "Your health history,",
        titleSecond: "in one place.",
        description:
          "Your personal medical vault is ready. Keep your important health records organized, accessible and under your control.",
        yourAccount: "Your account",
        accountDetails: "Account details",
        email: "Email",
        memberSince: "Member since",
        recordsControl: "Your records. Your control.",
        privacyDescription:
          "ClarityMD is designed around keeping your health history organized and giving you control over what you share.",
        privacyFirst: "Privacy-first by design",
        medicalVault: "Your medical vault",
        healthRecords: "Your health records",
        comingSoon: "Coming soon",
        medicalReports: "Medical reports",
        reports: "Reports",
        prescriptions: "Prescriptions",
        medications: "Medications",
        labResults: "Lab results",
        laboratory: "Laboratory",
        doctorNotes: "Doctor notes",
        consultations: "Consultations",
        healthTimeline: "Health timeline",
        timelineDescription:
          "See your medical history chronologically.",
        askHistory: "Ask your health history",
        askDescription:
          "Find information across your own records.",
        disclaimer:
          "ClarityMD is a personal health record organizer and is not a substitute for professional medical advice or diagnosis.",
      };

  const recordTypes = [
    {
      title: content.medicalReports,
      type: content.reports,
    },
    {
      title: content.prescriptions,
      type: content.medications,
    },
    {
      title: content.labResults,
      type: content.laboratory,
    },
    {
      title: content.doctorNotes,
      type: content.consultations,
    },
  ];

  return (
    <main
      className="min-h-screen bg-[#F7F7F2] text-[#10201D]"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Header */}
      <header className="border-b border-[#E3E8E4] bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#087F6B] text-sm font-bold text-white">
              C
            </div>

            <span className="text-[15px] font-semibold tracking-tight">
              ClarityMD
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-[#E3E8E4] bg-white px-3 py-1.5 sm:flex">
              <span className="size-2 shrink-0 rounded-full bg-[#087F6B]" />

              <span className="text-xs font-medium text-[#66736F]">
                {content.personalVault}
              </span>
            </div>

            <LanguageToggle />

            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#DDF1EA]">
              <UserRound className="size-4 text-[#087F6B]" />
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12">
        {/* Welcome */}
        <section className="rounded-[28px] border border-[#E3E8E4] bg-white p-6 shadow-[0_12px_40px_rgba(16,32,29,0.05)] sm:p-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="text-start">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EAF4EE] px-3 py-1.5">
                <Sparkles className="size-3.5 shrink-0 text-[#087F6B]" />

                <span className="text-[11px] font-semibold text-[#087F6B]">
                  {content.welcome}
                </span>
              </div>

              <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {content.title}
                <br className="hidden sm:block" />
                {content.titleSecond}
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#66736F]">
                {content.description}
              </p>
            </div>

            <div className="flex size-24 shrink-0 items-center justify-center self-start rounded-[24px] bg-[#DDF1EA] lg:size-28 lg:self-auto">
              <ShieldCheck
                className="size-11 text-[#087F6B]"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </section>

        {/* Account information */}
        <section className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-[24px] border border-[#E3E8E4] bg-white p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="text-start">
                <p className="text-xs font-medium text-[#66736F]">
                  {content.yourAccount}
                </p>

                <h2 className="mt-1 text-lg font-semibold">
                  {content.accountDetails}
                </h2>
              </div>

              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#F7F7F2]">
                <UserRound className="size-4 text-[#66736F]" />
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#F7F7F2] p-4">
                <div className="flex items-center gap-2 text-[#66736F]">
                  <UserRound className="size-4 shrink-0" />

                  <span className="text-xs">
                    {content.email}
                  </span>
                </div>

                {/* Email intentionally remains LTR */}
                <p
                  dir="ltr"
                  className="mt-3 break-all text-start text-sm font-medium"
                >
                  {email}
                </p>
              </div>

              <div className="rounded-2xl bg-[#F7F7F2] p-4">
                <div className="flex items-center gap-2 text-[#66736F]">
                  <CalendarDays className="size-4 shrink-0" />

                  <span className="text-xs">
                    {content.memberSince}
                  </span>
                </div>

                <p className="mt-3 text-sm font-medium">
                  {memberSince}
                </p>
              </div>
            </div>
          </div>

          {/* Privacy card */}
          <div className="rounded-[24px] bg-[#10201D] p-6 text-white">
            <div className="flex size-10 items-center justify-center rounded-xl bg-white/10">
              <LockKeyhole className="size-5 text-[#7ED7C3]" />
            </div>

            <h2 className="mt-6 text-start text-lg font-semibold">
              {content.recordsControl}
            </h2>

            <p className="mt-2 text-start text-sm leading-6 text-white/50">
              {content.privacyDescription}
            </p>

            <div className="mt-6 flex items-center gap-2 text-start text-xs font-medium text-[#7ED7C3]">
              <span>{content.privacyFirst}</span>

              <ShieldCheck className="size-3.5 shrink-0" />
            </div>
          </div>
        </section>

        {/* Medical vault */}
        <section className="mt-6">
          <div className="rounded-[24px] border border-[#E3E8E4] bg-white p-6">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div className="text-start">
                <p className="text-xs font-medium text-[#66736F]">
                  {content.medicalVault}
                </p>

                <h2 className="mt-1 text-xl font-semibold">
                  {content.healthRecords}
                </h2>
              </div>

              <span className="self-start rounded-full bg-[#EAF4EE] px-3 py-1.5 text-xs font-medium text-[#087F6B] sm:self-auto">
                {content.comingSoon}
              </span>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {recordTypes.map(({ title, type }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-[#E3E8E4] p-4 text-start transition hover:border-[#B8DCD2] hover:bg-[#F7F7F2]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF4EE]">
                      <FileText className="size-4 text-[#087F6B]" />
                    </div>

                    <ArrowUpRight className="size-4 shrink-0 text-[#B2BCB8] transition group-hover:text-[#087F6B] rtl:-scale-x-100" />
                  </div>

                  <p className="mt-5 text-sm font-semibold">
                    {title}
                  </p>

                  <p className="mt-1 text-xs text-[#66736F]">
                    {type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future features */}
        <section className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-[20px] border border-[#E3E8E4] bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF4EE]">
                <FileText className="size-4 text-[#087F6B]" />
              </div>

              <div className="text-start">
                <p className="text-sm font-semibold">
                  {content.healthTimeline}
                </p>

                <p className="text-xs text-[#66736F]">
                  {content.timelineDescription}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[20px] border border-[#E3E8E4] bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF4EE]">
                <Sparkles className="size-4 text-[#087F6B]" />
              </div>

              <div className="text-start">
                <p className="text-sm font-semibold">
                  {content.askHistory}
                </p>

                <p className="text-xs text-[#66736F]">
                  {content.askDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-[11px] leading-5 text-[#8A9591]">
          {content.disclaimer}
        </p>
      </div>
    </main>
  );
}