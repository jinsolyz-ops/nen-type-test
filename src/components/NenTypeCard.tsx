"use client";

import Image from "next/image";

import type { NenType } from "@/lib/nenTypes";

interface NenTypeCardProps {
  nenType: NenType;
}

export function NenTypeCard({ nenType }: NenTypeCardProps) {
  return (
    <section className="surface-card rounded-[28px] p-6 sm:p-8">
      <div className="mb-6">
        <p className="gold-label mb-2 text-xs">
          {nenType.en} / {nenType.name}
        </p>
        <p className="text-sm leading-7 text-[var(--text)]/90 sm:text-base">{nenType.desc}</p>
      </div>

      <div className="grid gap-4 text-sm leading-7 text-[var(--text)]/90 sm:text-base">
        <p>
          <strong className="text-[var(--gold)]">주요 능력</strong>
          {"  "}
          {nenType.ability}
        </p>
        <p>
          <strong className="text-[var(--gold)]">성격</strong>
          {"  "}
          {nenType.personality}
        </p>
        <p>
          <strong className="text-[var(--gold)]">어울리는 MBTI</strong>
          {"  "}
          {nenType.mbti.join(" · ")}
        </p>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold">대표 캐릭터</h3>
        <div className="grid grid-cols-2 gap-4">
          {nenType.characters.map((character) => (
            <article
              key={character.name}
              className="rounded-[22px] border border-[var(--border)] bg-white/[0.03] p-3"
            >
              <div className="relative mb-3 aspect-[4/5] overflow-hidden rounded-[18px] bg-white/[0.05]">
                <Image
                  src={character.imageUrl}
                  alt={character.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 680px) 45vw, 220px"
                />
              </div>
              <p className="mb-1 text-base font-bold">{character.name}</p>
              <p className="text-xs leading-6 text-[var(--muted)] sm:text-sm">{character.ability}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
