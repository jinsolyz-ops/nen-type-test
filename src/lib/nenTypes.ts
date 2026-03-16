import { NEN_TYPE_KEYS, type NenType, type NenTypeKey } from "@/types";

const characterImage = (slug: string): string => `/characters/${slug}.svg`;

export const nenTypes: Record<NenTypeKey, NenType> = {
  K: {
    key: "K",
    name: "강화계",
    en: "ENHANCEMENT",
    color: "#dc5040",
    desc: "정면 돌파에 강하고, 몸과 마음을 단단하게 밀어붙이는 전투형 계통이다.",
    ability: "신체 능력 강화, 단순하지만 압도적인 파괴력, 정면 승부에 최적화된 오라 운용.",
    personality: "솔직하고 우직하다. 판단이 빠르고 목표가 보이면 망설이지 않고 부딪히는 편이다.",
    jobs: ["운동선수", "소방관", "현장 리더"],
    characters: [
      {
        name: "곤 프릭스",
        imageUrl: characterImage("gon"),
        ability: "강화한 주먹에 오라를 집중해 폭발적인 일격을 만든다.",
      },
      {
        name: "우봉",
        imageUrl: characterImage("uvogin"),
        ability: "압도적인 육체와 강화된 타격으로 전장을 정리한다.",
      },
    ],
    affinity: {
      K: 100,
      H: 80,
      T: 80,
      G: 60,
      S: 60,
      J: 40,
    },
  },
  H: {
    key: "H",
    name: "방출계",
    en: "EMISSION",
    color: "#50a0dc",
    desc: "오라를 몸 밖으로 멀리 뻗어 내보내며, 거리와 순간 폭발력을 장악하는 계통이다.",
    ability: "원거리 방출, 탄환형 공격, 넓은 범위를 빠르게 압박하는 오라 발사.",
    personality: "직설적이고 행동이 빠르다. 즉흥 대응에 강하며 판을 크게 보는 경향이 있다.",
    jobs: ["응급 구조사", "영업 리더", "파일럿"],
    characters: [
      {
        name: "레오리오",
        imageUrl: characterImage("leorio"),
        ability: "오라를 멀리 투사해 떨어진 곳까지 타격을 전달한다.",
      },
      {
        name: "프랭클린",
        imageUrl: characterImage("franklin"),
        ability: "손가락 끝에서 다수의 오라 탄환을 난사한다.",
      },
    ],
    affinity: {
      K: 80,
      H: 100,
      T: 60,
      G: 40,
      S: 60,
      J: 80,
    },
  },
  T: {
    key: "T",
    name: "변화계",
    en: "TRANSMUTATION",
    color: "#b478dc",
    desc: "오라의 성질을 바꾸어 예측 불가능한 전투 흐름을 만드는 트릭형 계통이다.",
    ability: "오라 성질 변환, 속성 부여, 기습과 심리전을 섞는 변칙 전개.",
    personality: "감각이 예민하고 발상이 유연하다. 장난기와 계산적인 면이 함께 드러난다.",
    jobs: ["크리에이티브 디렉터", "연구원", "퍼포머"],
    characters: [
      {
        name: "킬루아",
        imageUrl: characterImage("killua"),
        ability: "오라를 전기로 바꾸어 속도와 반응성을 극단적으로 끌어올린다.",
      },
      {
        name: "히소카",
        imageUrl: characterImage("hisoka"),
        ability: "고무와 껌 같은 성질의 오라로 함정과 기습을 설계한다.",
      },
    ],
    affinity: {
      K: 80,
      H: 60,
      T: 100,
      G: 80,
      S: 40,
      J: 60,
    },
  },
  G: {
    key: "G",
    name: "구현화계",
    en: "CONJURATION",
    color: "#3cb478",
    desc: "명확한 규칙과 이미지로 능력을 실체화하며, 정교한 조건 설계에 강한 계통이다.",
    ability: "도구 및 구조물 구현, 조건부 능력 설계, 준비된 판에서 강한 제어력.",
    personality: "치밀하고 분석적이다. 기준이 분명하며 스스로 세운 룰을 중요하게 여긴다.",
    jobs: ["기획자", "제품 디자이너", "변호사"],
    characters: [
      {
        name: "쿠라피카",
        imageUrl: characterImage("kurapika"),
        ability: "사슬을 구현해 제압, 탐지, 회복까지 다층적으로 운용한다.",
      },
      {
        name: "코르트피",
        imageUrl: characterImage("kortopi"),
        ability: "대상을 복제해 정보전과 교란에 활용한다.",
      },
    ],
    affinity: {
      K: 60,
      H: 40,
      T: 80,
      G: 100,
      S: 80,
      J: 60,
    },
  },
  S: {
    key: "S",
    name: "조작계",
    en: "MANIPULATION",
    color: "#dca028",
    desc: "상대와 도구, 상황을 자신의 방식으로 통제하며 흐름을 설계하는 계통이다.",
    ability: "타인 및 물체 조작, 조건부 지배, 전장을 유리한 구조로 고정하는 운영력.",
    personality: "침착하고 계산이 빠르다. 감정보다 효율을 우선하며 판세를 읽는 데 능하다.",
    jobs: ["프로듀서", "전략 컨설턴트", "오퍼레이터"],
    characters: [
      {
        name: "일루미",
        imageUrl: characterImage("illumi"),
        ability: "침과 조건을 이용해 타인의 행동을 정밀하게 통제한다.",
      },
      {
        name: "모라우",
        imageUrl: characterImage("morel"),
        ability: "연기 병사를 조작해 정찰, 압박, 교란을 유연하게 수행한다.",
      },
    ],
    affinity: {
      K: 60,
      H: 60,
      T: 40,
      G: 80,
      S: 100,
      J: 80,
    },
  },
  J: {
    key: "J",
    name: "특질계",
    en: "SPECIALIZATION",
    color: "#c8c850",
    desc: "일반 계통의 규칙으로 설명하기 어려운 고유 능력을 지닌 예외적 계통이다.",
    ability: "희소한 고유 능력, 변수 창출, 기존 규칙을 비틀어 판을 뒤집는 특수성.",
    personality: "독창적이고 존재감이 강하다. 기준이 남다르며 주변을 자신만의 흐름으로 끌어당긴다.",
    jobs: ["창업가", "예술가", "전략가"],
    characters: [
      {
        name: "네테로",
        imageUrl: characterImage("netero"),
        ability: "극한의 수련 끝에 도달한 초월적 전투 감각과 독자적 경지를 보여준다.",
      },
      {
        name: "메르엠",
        imageUrl: characterImage("meruem"),
        ability: "압도적인 지배력과 진화를 통해 전장의 규칙 자체를 바꾼다.",
      },
    ],
    affinity: {
      K: 40,
      H: 80,
      T: 60,
      G: 60,
      S: 80,
      J: 100,
    },
  },
};

export const nenTypeList = NEN_TYPE_KEYS.map((key) => nenTypes[key]);

export const getNenType = (key: NenTypeKey): NenType => nenTypes[key];
