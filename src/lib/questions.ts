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
    text: "중요한 승부를 앞뒀을 때, 당신은 어떤 방식으로 준비하나요?",
    options: [
      {
        id: "q1-a",
        text: "기본기를 끝까지 반복하며 몸으로 익힌다.",
        weights: scores(4, 1, 1, 0, 0, 0),
      },
      {
        id: "q1-b",
        text: "실전에 가까운 상황을 만들고 거리감과 타이밍을 점검한다.",
        weights: scores(1, 4, 1, 0, 0, 1),
      },
      {
        id: "q1-c",
        text: "상대가 예상 못 할 변수와 패턴을 준비한다.",
        weights: scores(0, 1, 4, 1, 0, 1),
      },
      {
        id: "q1-d",
        text: "규칙과 조건을 정리해 가장 유리한 운영 방식을 설계한다.",
        weights: scores(0, 0, 1, 3, 3, 1),
      },
    ],
  },
  {
    id: 2,
    label: "QUESTION 02",
    text: "새로운 일을 맡으면 가장 먼저 확인하는 것은 무엇인가요?",
    options: [
      {
        id: "q2-a",
        text: "내가 직접 밀어붙여 해결할 수 있는 핵심 포인트.",
        weights: scores(4, 1, 0, 0, 0, 0),
      },
      {
        id: "q2-b",
        text: "빠르게 실행해 반응을 보며 조정할 수 있는 부분.",
        weights: scores(1, 4, 1, 0, 0, 1),
      },
      {
        id: "q2-c",
        text: "다른 사람과 다르게 풀어낼 수 있는 독특한 방식.",
        weights: scores(0, 1, 3, 0, 0, 3),
      },
      {
        id: "q2-d",
        text: "전체 구조, 역할 분담, 리스크 관리 기준.",
        weights: scores(0, 0, 0, 3, 4, 1),
      },
    ],
  },
  {
    id: 3,
    label: "QUESTION 03",
    text: "친한 사람이 당신을 배신했다는 사실을 알게 되면?",
    options: [
      {
        id: "q3-a",
        text: "바로 만나서 이유를 묻고 정면으로 부딪힌다.",
        weights: scores(4, 1, 0, 0, 0, 0),
      },
      {
        id: "q3-b",
        text: "감정을 누른 채 상황을 빠르게 정리하고 선을 긋는다.",
        weights: scores(1, 2, 0, 1, 4, 0),
      },
      {
        id: "q3-c",
        text: "왜 그런 선택을 했는지 여러 가능성을 따져본다.",
        weights: scores(0, 0, 1, 4, 2, 1),
      },
      {
        id: "q3-d",
        text: "겉으로는 태연하지만, 내 방식으로 되갚을 타이밍을 본다.",
        weights: scores(0, 1, 3, 0, 1, 4),
      },
    ],
  },
  {
    id: 4,
    label: "QUESTION 04",
    text: "팀 프로젝트에서 당신이 가장 자주 맡는 역할은?",
    options: [
      {
        id: "q4-a",
        text: "앞에서 분위기를 끌어올리고 실행을 밀어붙이는 사람.",
        weights: scores(4, 2, 0, 0, 0, 0),
      },
      {
        id: "q4-b",
        text: "답답한 구간을 빠르게 뚫어 주는 해결사.",
        weights: scores(1, 4, 1, 0, 0, 1),
      },
      {
        id: "q4-c",
        text: "새로운 아이디어를 던지고 판을 뒤집는 브레인.",
        weights: scores(0, 1, 4, 1, 0, 2),
      },
      {
        id: "q4-d",
        text: "일정을 정리하고 흐름을 통제하는 운영 담당.",
        weights: scores(0, 0, 0, 3, 4, 1),
      },
    ],
  },
  {
    id: 5,
    label: "QUESTION 05",
    text: "예상치 못한 위기 상황이 닥치면 당신은 어떻게 움직이나요?",
    options: [
      {
        id: "q5-a",
        text: "몸이 먼저 반응한다. 일단 막고 본다.",
        weights: scores(4, 1, 0, 0, 0, 0),
      },
      {
        id: "q5-b",
        text: "가능한 선택지를 빠르게 쏘아 보며 탈출구를 찾는다.",
        weights: scores(1, 4, 2, 0, 0, 1),
      },
      {
        id: "q5-c",
        text: "상황을 비틀 수 있는 의외의 카드부터 찾는다.",
        weights: scores(0, 1, 4, 0, 0, 3),
      },
      {
        id: "q5-d",
        text: "판을 재정렬하고 누구를 어디에 둘지 계산한다.",
        weights: scores(0, 0, 0, 2, 4, 1),
      },
    ],
  },
  {
    id: 6,
    label: "QUESTION 06",
    text: "당신이 가장 끌리는 능력의 형태는 무엇인가요?",
    options: [
      {
        id: "q6-a",
        text: "단순하지만 누구도 막기 어려운 강력한 힘.",
        weights: scores(4, 1, 0, 0, 0, 0),
      },
      {
        id: "q6-b",
        text: "멀리 있는 대상까지 정확하게 닿는 파워.",
        weights: scores(1, 4, 1, 0, 0, 1),
      },
      {
        id: "q6-c",
        text: "상황마다 성질이 바뀌는 유연하고 재밌는 힘.",
        weights: scores(0, 1, 4, 1, 0, 2),
      },
      {
        id: "q6-d",
        text: "조건과 규칙으로 완성되는 정교한 고유 능력.",
        weights: scores(0, 0, 0, 3, 2, 3),
      },
    ],
  },
  {
    id: 7,
    label: "QUESTION 07",
    text: "주변 사람들은 당신을 어떤 사람이라고 말하나요?",
    options: [
      {
        id: "q7-a",
        text: "솔직하고 단단해서 믿고 등을 맡길 수 있는 사람.",
        weights: scores(4, 1, 0, 0, 0, 0),
      },
      {
        id: "q7-b",
        text: "시원시원하고 추진력이 좋아서 판을 움직이는 사람.",
        weights: scores(1, 4, 1, 0, 0, 1),
      },
      {
        id: "q7-c",
        text: "엉뚱하지만 재능이 번뜩여서 눈을 뗄 수 없는 사람.",
        weights: scores(0, 1, 4, 0, 0, 3),
      },
      {
        id: "q7-d",
        text: "차분하고 계산적이어서 흐름을 잘 읽는 사람.",
        weights: scores(0, 0, 0, 3, 4, 1),
      },
    ],
  },
  {
    id: 8,
    label: "QUESTION 08",
    text: "마음에 드는 목표가 생겼을 때 당신의 태도는?",
    options: [
      {
        id: "q8-a",
        text: "정해졌다 싶으면 고민 없이 전력으로 간다.",
        weights: scores(4, 1, 0, 0, 0, 0),
      },
      {
        id: "q8-b",
        text: "속도를 유지하며 여러 루트를 동시에 시도한다.",
        weights: scores(1, 4, 1, 0, 1, 1),
      },
      {
        id: "q8-c",
        text: "남들이 생각 못 한 지름길을 찾아본다.",
        weights: scores(0, 1, 4, 1, 0, 2),
      },
      {
        id: "q8-d",
        text: "끝까지 갈 수 있게 조건과 계획을 먼저 짠다.",
        weights: scores(0, 0, 0, 3, 3, 2),
      },
    ],
  },
  {
    id: 9,
    label: "QUESTION 09",
    text: "게임을 한다면 어떤 플레이 스타일이 가장 재밌나요?",
    options: [
      {
        id: "q9-a",
        text: "정직하게 성장해서 힘으로 찍어 누르는 스타일.",
        weights: scores(4, 1, 0, 0, 0, 0),
      },
      {
        id: "q9-b",
        text: "사거리와 템포를 살려 먼저 압박하는 스타일.",
        weights: scores(1, 4, 1, 0, 0, 1),
      },
      {
        id: "q9-c",
        text: "트릭과 심리전으로 상대를 흔드는 스타일.",
        weights: scores(0, 1, 4, 1, 0, 2),
      },
      {
        id: "q9-d",
        text: "세팅과 운영으로 승리를 설계하는 스타일.",
        weights: scores(0, 0, 0, 3, 4, 1),
      },
    ],
  },
  {
    id: 10,
    label: "QUESTION 10",
    text: "누군가 당신의 능력을 한 단어로 표현한다면 무엇에 가깝나요?",
    options: [
      {
        id: "q10-a",
        text: "근성",
        weights: scores(4, 1, 0, 0, 0, 0),
      },
      {
        id: "q10-b",
        text: "돌파력",
        weights: scores(1, 4, 1, 0, 1, 1),
      },
      {
        id: "q10-c",
        text: "재치",
        weights: scores(0, 1, 4, 0, 0, 3),
      },
      {
        id: "q10-d",
        text: "통제력",
        weights: scores(0, 0, 0, 3, 4, 1),
      },
    ],
  },
  {
    id: 11,
    label: "QUESTION 11",
    text: "규칙이 빡빡한 환경에 놓이면 당신은 어떻게 하나요?",
    options: [
      {
        id: "q11-a",
        text: "불편해도 일단 버티며 결과로 증명한다.",
        weights: scores(4, 1, 0, 0, 1, 0),
      },
      {
        id: "q11-b",
        text: "규칙 안에서 가장 효율적인 속도를 찾아낸다.",
        weights: scores(1, 4, 1, 1, 1, 0),
      },
      {
        id: "q11-c",
        text: "규칙의 빈틈이나 새로운 해석부터 찾는다.",
        weights: scores(0, 1, 4, 1, 0, 2),
      },
      {
        id: "q11-d",
        text: "룰 자체를 구조적으로 이해하고 이용한다.",
        weights: scores(0, 0, 0, 3, 3, 2),
      },
    ],
  },
  {
    id: 12,
    label: "QUESTION 12",
    text: "당신이 가장 원하는 평가는 무엇인가요?",
    options: [
      {
        id: "q12-a",
        text: "끝까지 믿고 맡길 수 있는 사람.",
        weights: scores(4, 1, 0, 0, 0, 0),
      },
      {
        id: "q12-b",
        text: "어떤 상황에서도 길을 뚫는 사람.",
        weights: scores(1, 4, 1, 0, 0, 1),
      },
      {
        id: "q12-c",
        text: "대체 불가능한 감각을 가진 사람.",
        weights: scores(0, 1, 4, 0, 0, 3),
      },
      {
        id: "q12-d",
        text: "흐름 전체를 읽고 완성하는 사람.",
        weights: scores(0, 0, 0, 3, 4, 2),
      },
    ],
  },
];
