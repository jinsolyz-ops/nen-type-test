"use client";

import { useEffect, useState } from "react";
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

    await new Promise((resolve) => window.setTimeout(resolve, ANSWER_DELAY_MS));

    const nextScores = addOptionScores(scores, option);

    if (current === questions.length - 1) {
      const topType = calcTopType(nextScores);
      const shareId = await saveResult(topType);
      router.push(`/result/${shareId}`);
      return;
    }

    setScores(nextScores);
    setCurrent((prev) => prev + 1);
    setSelectedOptionId(null);
    setIsSubmitting(false);
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
      </div>
    </main>
  );
}
