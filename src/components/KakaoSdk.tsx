"use client";

import Script from "next/script";

const kakaoJsKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;

export function KakaoSdk() {
  return (
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (!kakaoJsKey) {
          return;
        }

        if (!window.Kakao) {
          return;
        }

        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(kakaoJsKey);
        }
      }}
    />
  );
}
