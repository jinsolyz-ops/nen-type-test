export interface KakaoShareFeedPayload {
  objectType: "feed";
  content: {
    title: string;
    description: string;
    imageUrl: string;
    link: {
      mobileWebUrl: string;
      webUrl: string;
    };
  };
  buttons: Array<{
    title: string;
    link: {
      mobileWebUrl: string;
      webUrl: string;
    };
  }>;
}

export interface KakaoApi {
  init: (appKey: string) => void;
  isInitialized: () => boolean;
  Share: {
    sendDefault: (payload: KakaoShareFeedPayload) => void;
  };
}

declare global {
  interface Window {
    Kakao?: KakaoApi;
  }
}

export {};
