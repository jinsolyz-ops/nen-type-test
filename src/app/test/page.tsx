"use client";

import { startTransition, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { ProgressBar } from "@/components/ProgressBar";
import { QuestionCard } from "@/components/QuestionCard";
import { questions } from "@/lib/questions";
import { addOptionScores, calcTopType, createEmptyScores, getProgressPercent } from "@/lib/scoring";
import { saveResult, trackPageView } from "@/lib/supabase";
import type { Scores } from "@/types";

const ANSWER_DELAY_MS = 350;

export default function TestPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Scores>(createEmptyScores);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isFinishing, setIsFinishing] = useState(false);

  const question = questions[current];
  const progressPercent = getProgressPercent(current, questions.length);

  useEffect(() => {
    void trackPageView("/test");
  }, []);

  const handleSelect = async (optionId: string) => {
    if (isSubmitting) {
      return;
    }

    const option = question.options.find((item) => item.id === optionId);

    if (!option) {
      return;
    }

    setSelectedOptionId(option.id);
    setIsSubmitting(true);
    setErrorMessage(null);
    setIsFinishing(current === questions.length - 1);

    await new Promise((resolve) => window.setTimeout(resolve, ANSWER_DELAY_MS));

    const nextScores = addOptionScores(scores, option);

    try {
      if (current === questions.length - 1) {
        const topType = calcTopType(nextScores);
        const shareId = await saveResult(topType);

        startTransition(() => {
          router.push(`/result/${shareId}`);
        });

        return;
      }

      setScores(nextScores);
      setCurrent((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsFinishing(false);
    } catch (error) {
      console.error(error);
      setErrorMessage("결과 저장에 실패했습니다. 잠시 후 다시 시도해주세요.");
      setSelectedOptionId(null);
      setIsFinishing(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="page-wrap flex min-h-screen items-center py-10">
      <div className="flex w-full flex-col gap-5">
        <ProgressBar
          current={current + 1}
          total={questions.length}
          percent={progressPercent}
        />
        <QuestionCard
          question={question}
          selectedOptionId={selectedOptionId}
          disabled={isSubmitting}
          onSelect={handleSelect}
        />
        {isFinishing ? (
          <div className="surface-card flex items-center justify-center gap-3 rounded-[24px] px-5 py-4 text-sm text-[var(--gold-light)]">
            <span className="h-3 w-3 animate-spin rounded-full border-2 border-[var(--gold)] border-t-transparent" />
            <span>결과 분석 중...</span>
          </div>
        ) : null}
        {errorMessage ? (
          <p className="text-center text-sm text-[#ff9b8f]">{errorMessage}</p>
        ) : null}
      </div>
    </main>
  );
}
