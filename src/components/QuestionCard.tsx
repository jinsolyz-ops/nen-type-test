"use client";

import type { Question } from "@/types";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  selectedChoiceIndex: number | null;
  disabled: boolean;
  onSelect: (choiceIndex: number) => void;
}

export function QuestionCard({
  question,
  questionNumber,
  selectedChoiceIndex,
  disabled,
  onSelect,
}: QuestionCardProps) {
  return (
    <section className="surface-card fade-up rounded-[28px] p-6 sm:p-8">
      <p className="gold-label mb-4 text-xs">{`QUESTION ${String(questionNumber).padStart(2, "0")}`}</p>
      <div className="mb-8 rounded-[24px] border border-[var(--border)] bg-white/[0.02] p-5 sm:p-6">
        <h1 className="text-xl font-bold leading-8 sm:text-2xl">{question.text}</h1>
      </div>

      <div className="grid gap-3">
        {question.choices.map((choice, index) => {
          const isSelected = selectedChoiceIndex === index;

          return (
            <button
              key={`${questionNumber}-${index}`}
              type="button"
              onClick={() => onSelect(index)}
              disabled={disabled}
              className={`rounded-[22px] border px-5 py-4 text-left text-xs leading-6 font-normal transition sm:text-sm ${
                isSelected
                  ? "border-[var(--gold)] bg-[var(--aura)] text-[var(--gold-light)]"
                  : "border-[var(--border)] bg-white/[0.02] hover:border-[var(--gold)]/40 hover:bg-white/[0.04]"
              } ${disabled ? "cursor-not-allowed opacity-70" : ""}`}
            >
              {choice.text}
            </button>
          );
        })}
      </div>
    </section>
  );
}
