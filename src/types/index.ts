export const NEN_TYPE_KEYS = ["K", "H", "T", "G", "S", "J"] as const;

export type NenTypeKey = (typeof NEN_TYPE_KEYS)[number];

export type Scores = Record<NenTypeKey, number>;

export type PageViewPath = "/" | "/test" | "/result";

export interface NenCharacter {
  name: string;
  imageUrl: string;
  ability: string;
}

export interface NenType {
  key: NenTypeKey;
  name: string;
  en: string;
  color: string;
  tagline: string;
  desc: string;
  ability: string;
  personality: string;
  mbti: [string, string] | [string, string, string] | [string, string, string, string];
  characters: [NenCharacter, NenCharacter];
  affinity: Scores;
}

export interface QuestionOption {
  text: string;
  scores: Partial<Scores>;
}

export interface Question {
  text: string;
  choices: [
    QuestionOption,
    QuestionOption,
    QuestionOption,
    QuestionOption,
  ];
}

export interface NenResult {
  id: string;
  share_id: string;
  top_type: NenTypeKey;
  created_at: string;
}

export interface NenResultInsert {
  share_id: string;
  top_type: NenTypeKey;
}

export interface PageView {
  id: number;
  path: PageViewPath;
  created_at: string;
}

export interface PageViewInsert {
  path: PageViewPath;
}
