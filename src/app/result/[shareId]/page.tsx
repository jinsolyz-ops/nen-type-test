import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { NenTypeCard } from "@/components/NenTypeCard";
import { RadarChart } from "@/components/RadarChart";
import { ResultBanner } from "@/components/ResultBanner";
import { ShareButtons } from "@/components/ShareButtons";
import { findNenType, nenTypeAffinities, nenTypeColors } from "@/lib/nenTypeRuntime";
import { getResultByShareId } from "@/lib/supabase";
import type { NenTypeKey } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

interface ResultPageProps {
  params: Promise<{
    shareId: string;
  }>;
}

async function loadResult(shareId: string) {
  try {
    return await getResultByShareId(shareId);
  } catch {
    notFound();
  }
}

export async function generateMetadata({ params }: ResultPageProps): Promise<Metadata> {
  const { shareId } = await params;
  const result = await loadResult(shareId);
  const nenType = findNenType(result.top_type as NenTypeKey);
  const title = `${nenType.name} | 念 Type Test`;
  const description = nenType.desc;
  const url = `${baseUrl}/result/${shareId}`;
  const ogImage = `${baseUrl}/api/og?type=${nenType.key}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { shareId } = await params;
  const result = await loadResult(shareId);
  const typeKey = result.top_type as NenTypeKey;
  const nenType = findNenType(typeKey);
  const color = nenTypeColors[typeKey];
  const scores = nenTypeAffinities[typeKey];

  return (
    <main className="page-wrap py-8">
      <div className="flex flex-col gap-5">
        <ResultBanner nenType={nenType} color={color} />
        <RadarChart scores={scores} color={color} />
        <NenTypeCard nenType={nenType} />
        <ShareButtons nenType={nenType} shareId={shareId} />
        <Link
          href="/test"
          className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/[0.03] px-5 py-4 font-semibold transition hover:border-[var(--gold)] hover:bg-[var(--aura)]"
        >
          다시 진단하기
        </Link>
      </div>
    </main>
  );
}
