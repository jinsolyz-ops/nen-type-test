"use client";

import { useEffect } from "react";

import type { NenType } from "@/lib/nenTypes";
import { trackPageView } from "@/lib/supabase";

interface ShareButtonsProps {
  nenType: NenType;
  shareId: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
const kakaoJsKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;

export function ShareButtons({ nenType, shareId }: ShareButtonsProps) {
  useEffect(() => {
    void trackPageView("/result");
  }, []);

  useEffect(() => {
    if (!kakaoJsKey) {
      return;
    }

    if (!window.Kakao) {
      return;
    }

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(kakaoJsKey);
    }
  }, []);

  const resultUrl = `${baseUrl}/result/${shareId}`;
  const imageUrl = `${baseUrl}/api/og?type=${nenType.key}`;
  const shareText = `나의 넨 계통은 ${nenType.name}(${nenType.en})!\n念 Type Test로 당신의 계통도 알아보세요 ↓`;

  const handleTwitterShare = () => {
    const url = new URL("https://twitter.com/intent/tweet");
    url.searchParams.set("text", shareText);
    url.searchParams.set("url", resultUrl);
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  const handleKakaoShare = () => {
    if (!window.Kakao?.isInitialized()) {
      return;
    }

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `나의 넨 계통은 ${nenType.name}`,
        description: nenType.desc.slice(0, 60),
        imageUrl,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: "내 계통 확인하기",
          link: {
            mobileWebUrl: resultUrl,
            webUrl: resultUrl,
          },
        },
      ],
    });
  };

  return (
    <section className="surface-card rounded-[28px] p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleTwitterShare}
          className="flex-1 rounded-full border border-[var(--border)] bg-white/[0.03] px-5 py-4 font-semibold transition hover:border-[var(--gold)] hover:bg-[var(--aura)]"
        >
          X(트위터)로 공유
        </button>
        <button
          type="button"
          onClick={handleKakaoShare}
          className="flex-1 rounded-full border border-[var(--gold)] bg-[var(--gold)] px-5 py-4 font-semibold text-[#20170a] transition hover:border-[var(--gold-light)] hover:bg-[var(--gold-light)]"
        >
          카카오로 공유
        </button>
      </div>
    </section>
  );
}
