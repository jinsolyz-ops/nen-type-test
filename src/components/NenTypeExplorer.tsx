"use client";

import { useState } from "react";

import { NenTypeCard } from "@/components/NenTypeCard";
import type { NenType } from "@/lib/nenTypes";
import type { NenTypeKey } from "@/types";

interface NenTypeExplorerProps {
  initialType: NenType;
  allTypes: NenType[];
  resultTypeKey: NenTypeKey;
}

export function NenTypeExplorer({
  initialType,
  allTypes,
  resultTypeKey,
}: NenTypeExplorerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(initialType);

  return (
    <div className="flex flex-col gap-4">
      <NenTypeCard nenType={selectedType} />

      <section className="surface-card rounded-[28px] p-5 sm:p-6">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between rounded-[20px] border border-[var(--border)] bg-white/[0.03] px-5 py-4 text-left transition hover:border-[var(--gold)] hover:bg-[var(--aura)]"
        >
          <span className="font-semibold">다른 계통 보기</span>
          <span className="text-sm text-[var(--muted)]">{isOpen ? "접기" : "펼치기"}</span>
        </button>

        {isOpen ? (
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {allTypes.map((nenType) => {
              const isResultType = nenType.key === resultTypeKey;
              const isSelected = nenType.key === selectedType.key;

              return (
                <button
                  key={nenType.key}
                  type="button"
                  onClick={() => setSelectedType(nenType)}
                  className={`rounded-[20px] border px-4 py-4 text-left transition ${
                    isSelected
                      ? "border-[var(--gold)] bg-[var(--aura)]"
                      : "border-[var(--border)] bg-white/[0.03] hover:border-[var(--gold)]/40 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold">{nenType.name}</span>
                    {isResultType ? (
                      <span className="rounded-full bg-[var(--gold)] px-2 py-1 text-[10px] font-bold text-[#20170a]">
                        내 결과
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{nenType.tagline}</p>
                </button>
              );
            })}
          </div>
        ) : null}
      </section>
    </div>
  );
}
