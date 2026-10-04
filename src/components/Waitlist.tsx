"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Waitlist() {
  const { isArabic } = useLanguage();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const content = isArabic
    ? {
        eyebrow: "الوصول المبكر",
        title: "لا تفقد سجلاً طبياً مهماً مرة أخرى.",
        description:
          "كن من أوائل من يجربون ClarityMD عندما يصبح متاحاً.",
        name: "الاسم",
        email: "البريد الإلكتروني",
        submit: "انضم لقائمة الانتظار",
        loading: "جاري الانضمام...",
        success: "تمت إضافتك إلى قائمة الانتظار.",
        error: "حدث خطأ. حاول مرة أخرى.",
      }
    : {
        eyebrow: "EARLY ACCESS",
        title: "Never lose an important medical record again.",
        description:
          "Be among the first to experience ClarityMD when it becomes available.",
        name: "Name",
        email: "Email address",
        submit: "Join the waitlist",
        loading: "Joining...",
        success: "You're on the waitlist.",
        error: "Something went wrong. Please try again.",
      };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? content.error);
        return;
      }

      setStatus("success");
      setMessage(data.message ?? content.success);
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage(content.error);
    }
  }

  return (
    <section
      id="waitlist"
      className="px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[32px] bg-[var(--primary)] p-7 text-white sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] text-white/60">
                {content.eyebrow}
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
                {content.title}
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-white/65">
                {content.description}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-5 text-[var(--text)] sm:p-6"
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="waitlist-name"
                    className="mb-2 block text-xs font-medium"
                  >
                    {content.name}
                  </label>

                  <input
                    id="waitlist-name"
                    type="text"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--primary)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="waitlist-email"
                    className="mb-2 block text-xs font-medium"
                  >
                    {content.email}
                  </label>

                  <input
                    id="waitlist-email"
                    type="email"
                    required
                    dir="ltr"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--primary)]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--text)] px-4 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading"
                    ? content.loading
                    : content.submit}

                  {status !== "loading" && (
                    <ArrowUpRight className="size-4" />
                  )}
                </button>

                {message && (
                  <div
                    className={`flex items-center gap-2 rounded-xl p-3 text-xs ${
                      status === "success"
                        ? "bg-[var(--accent)] text-[var(--primary)]"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {status === "success" && (
                      <CheckCircle2 className="size-4 shrink-0" />
                    )}
                    {message}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}