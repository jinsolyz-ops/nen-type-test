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
    text: "처음 만난 자리에서 나보다 훨씬 잘나가는 사람을 만났습니다.",
    options: [
      {
        id: "q1-a",
        text: "일단 말 걸어본다. 친해지면 되지.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q1-b",
        text: "어떤 사람인지 관찰한다. 파악이 먼저다.",
        weights: scores(0, 0, 0, 3, 0, 0),
      },
      {
        id: "q1-c",
        text: "흥미롭다. 어떻게 저렇게 됐는지 궁금하다.",
        weights: scores(0, 0, 3, 0, 0, 0),
      },
      {
        id: "q1-d",
        text: "내가 뭘 배울 수 있는지 생각한다.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
    ],
  },
  {
    id: 2,
    label: "QUESTION 02",
    text: "열심히 준비한 발표나 프로젝트가 갑자기 엎어졌습니다.",
    options: [
      {
        id: "q2-a",
        text: "일단 뭐라도 한다. 가만히 있는 게 더 힘들다.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q2-b",
        text: "주변에 연락한다. 혼자 끙끙대기 싫다.",
        weights: scores(0, 3, 0, 0, 0, 0),
      },
      {
        id: "q2-c",
        text: "원인부터 파악한다. 다음엔 이러면 안 된다.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
      {
        id: "q2-d",
        text: "다른 방법을 찾는다. 어떻게든 된다.",
        weights: scores(0, 0, 0, 3, 0, 0),
      },
    ],
  },
  {
    id: 3,
    label: "QUESTION 03",
    text: "갑자기 일주일 휴가가 생겼습니다.",
    options: [
      {
        id: "q3-a",
        text: "하고 싶었던 거 배우러 간다.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q3-b",
        text: "보고 싶었던 사람 만난다.",
        weights: scores(0, 3, 0, 0, 0, 0),
      },
      {
        id: "q3-c",
        text: "혼자 어디든 떠난다. 계획 없이.",
        weights: scores(0, 0, 3, 0, 0, 0),
      },
      {
        id: "q3-d",
        text: "오래 미뤄뒀던 걸 드디어 파고든다.",
        weights: scores(0, 0, 0, 3, 0, 0),
      },
    ],
  },
  {
    id: 4,
    label: "QUESTION 04",
    text: "회의에서 내 아이디어가 무시당했습니다.",
    options: [
      {
        id: "q4-a",
        text: "결과로 보여준다. 말 필요 없다.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q4-b",
        text: "왜 그런지 이해하려 한다. 맞는 말이면 수용한다.",
        weights: scores(0, 3, 0, 0, 0, 0),
      },
      {
        id: "q4-c",
        text: "효율적으로 따진다. 감정은 뺀다.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
      {
        id: "q4-d",
        text: "그냥 내 방식대로 한다.",
        weights: scores(0, 0, 0, 0, 0, 3),
      },
    ],
  },
  {
    id: 5,
    label: "QUESTION 05",
    text: "우연히 중요한 정보를 알게 됐습니다. 이걸 쓰면 원하는 걸 얻을 수 있습니다.",
    options: [
      {
        id: "q5-a",
        text: "그냥 정면으로 얻는다. 그런 거 안 쓴다.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q5-b",
        text: "때가 될 때까지 갖고 있는다.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
      {
        id: "q5-c",
        text: "친한 사람한테는 알려준다.",
        weights: scores(0, 3, 0, 0, 0, 0),
      },
      {
        id: "q5-d",
        text: "일단 이게 맞는 건지 생각해본다.",
        weights: scores(0, 0, 0, 0, 0, 3),
      },
    ],
  },
  {
    id: 6,
    label: "QUESTION 06",
    text: "친하다고 생각했던 사람이 나를 이용했다는 걸 알게 됐습니다.",
    options: [
      {
        id: "q6-a",
        text: "바로 연락해서 따진다.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q6-b",
        text: "사실 좀 예상했다. 이미 대비해뒀다.",
        weights: scores(0, 0, 0, 3, 0, 0),
      },
      {
        id: "q6-c",
        text: "화보다 서운함이 먼저다.",
        weights: scores(0, 3, 0, 0, 0, 0),
      },
      {
        id: "q6-d",
        text: "일단 거리를 둔다. 감정적으로 행동하지 않는다.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
    ],
  },
  {
    id: 7,
    label: "QUESTION 07",
    text: "아무도 못 푼 문제가 내 차례에 왔습니다.",
    options: [
      {
        id: "q7-a",
        text: "일단 해본다.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q7-b",
        text: "오히려 재밌다. 도전하고 싶다.",
        weights: scores(0, 0, 3, 0, 0, 0),
      },
      {
        id: "q7-c",
        text: "같이 해결할 사람을 찾는다.",
        weights: scores(0, 3, 0, 0, 0, 0),
      },
      {
        id: "q7-d",
        text: "처음부터 끝까지 뜯어본다. 반드시 답이 있다.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
    ],
  },
  {
    id: 8,
    label: "QUESTION 08",
    text: "나한테 '잘한다'는 말을 들을 때는 주로 어떤 상황입니까?",
    options: [
      {
        id: "q8-a",
        text: "끝까지 포기 안 할 때.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q8-b",
        text: "누군가를 도왔을 때.",
        weights: scores(0, 3, 0, 0, 0, 0),
      },
      {
        id: "q8-c",
        text: "아무도 못 한 걸 해냈을 때.",
        weights: scores(0, 0, 0, 0, 0, 3),
      },
      {
        id: "q8-d",
        text: "예상한 대로 흘러갔을 때.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
    ],
  },
  {
    id: 9,
    label: "QUESTION 09",
    text: "지금 하는 일을 계속하는 이유는?",
    options: [
      {
        id: "q9-a",
        text: "더 잘하고 싶어서.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q9-b",
        text: "중요한 사람 때문에.",
        weights: scores(0, 3, 0, 0, 0, 0),
      },
      {
        id: "q9-c",
        text: "아직 못 해본 게 많아서.",
        weights: scores(0, 0, 3, 0, 0, 0),
      },
      {
        id: "q9-d",
        text: "내가 만든 방식으로 하고 싶어서.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
    ],
  },
  {
    id: 10,
    label: "QUESTION 10",
    text: "스트레스 받을 때 나는?",
    options: [
      {
        id: "q10-a",
        text: "뭔가 한다. 몸을 움직인다.",
        weights: scores(3, 0, 0, 0, 0, 0),
      },
      {
        id: "q10-b",
        text: "사람을 만난다.",
        weights: scores(0, 3, 0, 0, 0, 0),
      },
      {
        id: "q10-c",
        text: "혼자만의 시간을 갖는다.",
        weights: scores(0, 0, 3, 0, 0, 0),
      },
      {
        id: "q10-d",
        text: "왜 스트레스받는지 분석한다.",
        weights: scores(0, 0, 0, 0, 3, 0),
      },
    ],
  },
];
