import type { Question, Scores } from "@/types";

const scores = (
  K: number,
  H: number,
  T: number,
  G: number,
  S: number,
  J: number,
): Scores => ({
  K,
  H,
  T,
  G,
  S,
  J,
});

export const questions: Question[] = [
  {
    id: 1,
    label: "QUESTION 01",
    text: "헌터 시험 마지막 관문. 눈앞에 나타난 상대가 나보다 강해 보입니다.",
    options: [
      {
        id: "q1-a",
        text: "흥미롭다. 어떤 능력인지 보고 싶어서 오히려 설렌다.",
        weights: scores(0, 0, 3, 0, 0, 0),
      },
      {
        id: "q1-b",
        text: "감정은 배제한다. 도망갈지 싸울지 효율로만 판단한다.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
      {
        id: "q1-c",
        text: "그냥 덤빈다. 이기든 지든 일단 붙어봐야 안다.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q1-d",
        text: "먼저 파악한다. 싸우기 전에 이길 방법을 찾는다.",
        weights: scores(0, 0, 0, 3, 0, 0),
      },
    ],
  },
  {
    id: 2,
    label: "QUESTION 02",
    text: "소중한 사람이 위험에 처했습니다. 나 혼자선 역부족인 상황입니다.",
    options: [
      {
        id: "q2-a",
        text: "일단 살아남아야 지킬 수 있다. 냉정하게 판단한다.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
      {
        id: "q2-b",
        text: "역부족이어도 그냥 뛰어든다. 생각은 나중에 한다.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q2-c",
        text: "죽어도 지키겠다는 맹세가 내 힘이 된다. 한계 이상으로 움직인다.",
        weights: scores(0, 3, 0, 0, 0, 0),
      },
      {
        id: "q2-d",
        text: "주변 상황을 이용한다. 어떻게든 활로를 찾는다.",
        weights: scores(0, 0, 0, 3, 0, 0),
      },
    ],
  },
  {
    id: 3,
    label: "QUESTION 03",
    text: "갑자기 1주일의 자유시간이 생겼습니다.",
    options: [
      {
        id: "q3-a",
        text: "오래 궁금했던 걸 파고든다. 시간 가는 줄 모른다.",
        weights: scores(0, 0, 0, 3, 0, 0),
      },
      {
        id: "q3-b",
        text: "더 강해지기 위해 훈련한다. 쉬는 게 오히려 불안하다.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q3-c",
        text: "가보고 싶었던 곳으로 혼자 떠난다. 계획 없이 그냥 간다.",
        weights: scores(0, 0, 3, 0, 0, 0),
      },
      {
        id: "q3-d",
        text: "보고 싶었던 사람을 만나러 간다. 오래 연락을 못 했었다.",
        weights: scores(0, 3, 0, 0, 0, 0),
      },
    ],
  },
  {
    id: 4,
    label: "QUESTION 04",
    text: "팀원이 내 방식에 반대합니다. 네 방법은 틀렸다고 합니다.",
    options: [
      {
        id: "q4-a",
        text: "감정은 뺀다. 어느 쪽이 더 효율적인지만 따진다.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
      {
        id: "q4-b",
        text: "내 방식이 맞다. 일단 직접 해본다.",
        weights: scores(0, 0, 0, 0, 0, 3),
      },
      {
        id: "q4-c",
        text: "실력으로 증명한다. 말보다 결과가 먼저다.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q4-d",
        text: "일단 들어본다. 맞는 말이면 수용하고 틀리면 설득한다.",
        weights: scores(0, 3, 0, 0, 0, 0),
      },
    ],
  },
  {
    id: 5,
    label: "QUESTION 05",
    text: "엄청난 비밀을 알게 됐습니다. 이 정보를 쓰면 원하는 걸 얻을 수 있습니다.",
    options: [
      {
        id: "q5-a",
        text: "비밀 같은 건 필요 없다. 정면으로 얻는다.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q5-b",
        text: "최적의 타이밍에 쓰기 위해 일단 보관한다.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
      {
        id: "q5-c",
        text: "소중한 사람에게만 공유한다. 혼자 짊어지기 싫다.",
        weights: scores(0, 3, 0, 0, 0, 0),
      },
      {
        id: "q5-d",
        text: "이게 나한테 어떤 의미인지 먼저 생각한다. 함부로 쓸 수 없다.",
        weights: scores(0, 0, 0, 0, 0, 3),
      },
    ],
  },
  {
    id: 6,
    label: "QUESTION 06",
    text: "나에게 잘 대해줬던 사람이 사실 나를 이용했다는 걸 알게 됐습니다.",
    options: [
      {
        id: "q6-a",
        text: "감정을 정리하고 어떻게 활용할지 생각한다.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
      {
        id: "q6-b",
        text: "직접 찾아가서 따진다. 정면 돌파다.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q6-c",
        text: "이미 예상했다. 항상 대비책이 있었다.",
        weights: scores(0, 0, 0, 3, 0, 0),
      },
      {
        id: "q6-d",
        text: "배신감보다 슬픔이 먼저다. 그래도 이해하려고 한다.",
        weights: scores(0, 3, 0, 0, 0, 0),
      },
    ],
  },
  {
    id: 7,
    label: "QUESTION 07",
    text: "아무도 풀지 못한 난제가 눈앞에 있습니다.",
    options: [
      {
        id: "q7-a",
        text: "처음부터 끝까지 분석한다. 반드시 구멍이 있다.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
      {
        id: "q7-b",
        text: "오히려 재밌다. 남들이 안 된다고 하면 더 도전욕구가 생긴다.",
        weights: scores(0, 0, 3, 0, 0, 0),
      },
      {
        id: "q7-c",
        text: "같이 풀 사람을 찾는다. 혼자보다 같이가 낫다.",
        weights: scores(0, 3, 0, 0, 0, 0),
      },
      {
        id: "q7-d",
        text: "내 방식으로 접근한다. 정답이 없으면 내가 만들면 된다.",
        weights: scores(0, 0, 0, 0, 0, 3),
      },
    ],
  },
  {
    id: 8,
    label: "QUESTION 08",
    text: "당신에게 '강함'이란 무엇입니까?",
    options: [
      {
        id: "q8-a",
        text: "상대가 이길 수 없는 판을 만드는 지능이다.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
      {
        id: "q8-b",
        text: "어떤 적도 정면으로 이길 수 있는 힘이다.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q8-c",
        text: "남들이 흉내낼 수 없는 나만의 것이다.",
        weights: scores(0, 0, 0, 0, 0, 3),
      },
      {
        id: "q8-d",
        text: "소중한 걸 끝까지 지킬 수 있는 힘이다.",
        weights: scores(0, 3, 0, 0, 0, 0),
      },
    ],
  },
  {
    id: 9,
    label: "QUESTION 09",
    text: "헌터가 된 이유는 무엇입니까?",
    options: [
      {
        id: "q9-a",
        text: "이 세계를 내 손 안에 넣고 싶었다.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
      {
        id: "q9-b",
        text: "찾아야 할 사람이 있었다. 아니면 지켜야 할 게 있었다.",
        weights: scores(0, 3, 0, 0, 0, 0),
      },
      {
        id: "q9-c",
        text: "그냥 아무도 안 간 곳이 궁금했다.",
        weights: scores(0, 0, 3, 0, 0, 0),
      },
      {
        id: "q9-d",
        text: "최강의 적과 싸우고 싶었다.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
    ],
  },
  {
    id: 10,
    label: "QUESTION 10",
    text: "마지막 질문입니다. 넨을 처음 각성했을 때 드는 생각은?",
    options: [
      {
        id: "q10-a",
        text: "이걸로 뭘 만들 수 있을지 상상이 멈추지 않는다.",
        weights: scores(0, 0, 0, 3, 0, 0),
      },
      {
        id: "q10-b",
        text: "이걸로 더 강해질 수 있다. 바로 수련을 시작한다.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q10-c",
        text: "이걸 어떻게 활용할지 머릿속에서 설계가 시작된다.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
      {
        id: "q10-d",
        text: "이게 내 운명이었던 것 같다는 느낌이 든다.",
        weights: scores(0, 0, 0, 0, 0, 3),
      },
    ],
  },
];
