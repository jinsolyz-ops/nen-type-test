import { NEN_TYPE_KEYS, type NenTypeKey, type QuestionOption, type Scores } from "@/types";

export const createEmptyScores = (): Scores => ({
  K: 0,
  H: 0,
  T: 0,
  G: 0,
  S: 0,
  J: 0,
});

export const addOptionScores = (
  currentScores: Scores,
  option: QuestionOption,
): Scores => {
  const nextScores = createEmptyScores();

  for (const key of NEN_TYPE_KEYS) {
    nextScores[key] = currentScores[key] + option.weights[key];
  }

  return nextScores;
};

export const calcTopType = (scores: Scores): NenTypeKey => {
  let topKey: NenTypeKey = NEN_TYPE_KEYS[0];

  for (const key of NEN_TYPE_KEYS.slice(1)) {
    if (scores[key] > scores[topKey]) {
      topKey = key;
    }
  }

  return topKey;
};

export const getProgressPercent = (currentIndex: number, totalQuestions: number): number => {
  if (totalQuestions <= 0) {
    return 0;
  }

  const rawPercent = ((currentIndex + 1) / totalQuestions) * 100;
  return Math.min(100, Math.max(0, rawPercent));
};
