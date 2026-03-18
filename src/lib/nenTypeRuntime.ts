import { nenTypes, type NenType } from "@/lib/nenTypes";
import type { NenTypeKey, Scores } from "@/types";

export const nenTypeColors: Record<NenTypeKey, string> = {
  K: "#dc5040",
  H: "#50a0dc",
  T: "#b478dc",
  G: "#3cb478",
  S: "#dca028",
  J: "#c8c850",
};

export const nenTypeAffinities: Record<NenTypeKey, Scores> = {
  K: { K: 100, H: 80, T: 80, G: 60, S: 60, J: 40 },
  H: { K: 80, H: 100, T: 60, G: 40, S: 60, J: 80 },
  T: { K: 80, H: 60, T: 100, G: 80, S: 40, J: 60 },
  G: { K: 60, H: 40, T: 80, G: 100, S: 80, J: 60 },
  S: { K: 60, H: 60, T: 40, G: 80, S: 100, J: 80 },
  J: { K: 40, H: 80, T: 60, G: 60, S: 80, J: 100 },
};

const normalizeImageUrl = (imageUrl: string): string => imageUrl.replace(".png", ".svg");

export const findNenType = (key: NenTypeKey): NenType => {
  const nenType = nenTypes.find((item) => item.key === key);

  if (!nenType) {
    throw new Error(`Unknown nen type key: ${key}`);
  }

  return {
    ...nenType,
    characters: nenType.characters.map((character) => ({
      ...character,
      imageUrl: normalizeImageUrl(character.imageUrl),
    })),
  };
};
