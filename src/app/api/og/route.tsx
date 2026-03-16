import { ImageResponse } from "@vercel/og";

import { nenTypes } from "@/lib/nenTypes";
import { NEN_TYPE_KEYS, type NenTypeKey } from "@/types";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestedType = searchParams.get("type");
  const typeKey = NEN_TYPE_KEYS.includes(requestedType as NenTypeKey)
    ? (requestedType as NenTypeKey)
    : "K";
  const nenType = nenTypes[typeKey];

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#0a0a0f",
          color: "#e8e0d0",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-20px",
            width: "420px",
            height: "420px",
            borderRadius: "9999px",
            background: `${nenType.color}44`,
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "64px",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                margin: 0,
                color: "#c9a84c",
                fontSize: 22,
                letterSpacing: "0.35em",
              }}
            >
              NEN TYPE TEST
            </p>
            <div style={{ height: 28 }} />
            <p style={{ margin: 0, color: nenType.color, fontSize: 28, fontWeight: 700 }}>
              {nenType.en}
            </p>
            <div style={{ height: 14 }} />
            <h1 style={{ margin: 0, fontSize: 92, fontWeight: 900, color: "#e8e0d0" }}>
              {nenType.name}
            </h1>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: "720px" }}>
            <p style={{ margin: 0, fontSize: 30, lineHeight: 1.5 }}>{nenType.desc}</p>
            <div style={{ height: 22 }} />
            <p style={{ margin: 0, color: "#7a7068", fontSize: 20 }}>
              대표 캐릭터: {nenType.characters[0].name} · {nenType.characters[1].name}
            </p>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
