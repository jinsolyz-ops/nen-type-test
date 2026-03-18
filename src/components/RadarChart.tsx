"use client";

import { useEffect, useRef } from "react";

import type { Scores } from "@/types";

interface RadarChartProps {
  scores: Scores;
  color: string;
}

const AXIS_ORDER = ["K", "T", "G", "J", "S", "H"] as const;
const LABELS: Record<(typeof AXIS_ORDER)[number], string> = {
  K: "강화",
  H: "방출",
  T: "변화",
  G: "구현화",
  S: "조작",
  J: "특질",
};

export function RadarChart({ scores, color }: RadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const parentWidth = canvas.parentElement?.clientWidth ?? 320;
    const size = Math.min(parentWidth, 420);
    const ratio = window.devicePixelRatio || 1;

    canvas.width = size * ratio;
    canvas.height = size * ratio;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const center = size / 2;
    const radius = size * 0.33;
    let frameId = 0;
    let startTime = 0;

    const getPoint = (index: number, value: number) => {
      const angle = -Math.PI / 2 + (Math.PI * 2 * index) / AXIS_ORDER.length;
      const distance = radius * value;

      return {
        x: center + Math.cos(angle) * distance,
        y: center + Math.sin(angle) * distance,
      };
    };

    const draw = (progress: number) => {
      const eased = 1 - Math.pow(1 - progress, 3);

      context.clearRect(0, 0, size, size);

      for (let ring = 5; ring >= 1; ring -= 1) {
        context.beginPath();

        AXIS_ORDER.forEach((key, index) => {
          const point = getPoint(index, ring / 5);

          if (index === 0) {
            context.moveTo(point.x, point.y);
            return;
          }

          context.lineTo(point.x, point.y);
        });

        context.closePath();
        context.strokeStyle = "rgba(255,255,255,0.10)";
        context.lineWidth = 1;
        context.stroke();
      }

      AXIS_ORDER.forEach((key, index) => {
        const point = getPoint(index, 1);

        context.beginPath();
        context.moveTo(center, center);
        context.lineTo(point.x, point.y);
        context.strokeStyle = "rgba(255,255,255,0.12)";
        context.lineWidth = 1;
        context.stroke();

        const labelPoint = getPoint(index, 1.14);
        context.fillStyle = "#e8e0d0";
        context.font = "14px sans-serif";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(LABELS[key], labelPoint.x, labelPoint.y);
      });

      context.fillStyle = "#c9a84c";
      context.font = `${Math.round(size * 0.16)}px serif`;
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText("念", center, center);

      context.beginPath();

      AXIS_ORDER.forEach((key, index) => {
        const point = getPoint(index, (scores[key] / 100) * eased);

        if (index === 0) {
          context.moveTo(point.x, point.y);
          return;
        }

        context.lineTo(point.x, point.y);
      });

      context.closePath();
      context.fillStyle = `${color}33`;
      context.strokeStyle = color;
      context.lineWidth = 3;
      context.fill();
      context.stroke();

      AXIS_ORDER.forEach((key, index) => {
        const point = getPoint(index, (scores[key] / 100) * eased);

        context.beginPath();
        context.arc(point.x, point.y, 4.5, 0, Math.PI * 2);
        context.fillStyle = color;
        context.fill();
      });
    };

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / 900, 1);
      draw(progress);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    draw(0);
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [color, scores]);

  return (
    <section className="surface-card rounded-[28px] p-6 sm:p-8">
      <div className="mb-6">
        <p className="gold-label mb-2 text-xs">AURA DISTRIBUTION</p>
        <h2 className="text-2xl font-bold">오라 분포</h2>
      </div>
      <div className="flex justify-center">
        <canvas ref={canvasRef} aria-label="넨 계통 분포 레이더 차트" role="img" />
      </div>
    </section>
  );
}
