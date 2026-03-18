export type Character = {
  name: string;
  ability: string;
  imageUrl: string;
};

export type NenType = {
  key: "K" | "H" | "T" | "G" | "S" | "J";
  name: string;
  en: string;
  tagline: string;
  desc: string;
  ability: string;
  personality: string;
  mbti: string[];
  characters: Character[];
};

export const nenTypes: NenType[] = [
  {
    key: "K",
    name: "강화계",
    en: "ENHANCEMENT",
    tagline: "육체와 사물의 능력을 극한까지 끌어올리는 계통입니다.",
    desc: '넨의 기본 중의 기본입니다. 복잡한 것 없어요. 그냥 강하면 됩니다. 근데 이게 말이 쉽지, "그냥 강해진다"는 게 육체적으로도 정신적으로도 한계를 계속 넘어야 한다는 뜻이에요. 6계통 중 전투에서 제일 직관적이고 제일 무서운 이유가 여기 있죠. 곤이 왜 최강 잠재력인지 생각해보세요. 강화계는 단순해 보여도 끝까지 밀어붙이는 사람이 가장 무섭습니다.',
    ability: "신체 능력 극대화, 회복력 강화, 물체 성능 증폭",
    personality: '포기를 모릅니다. 목표가 생기면 그냥 직진이에요. 감정에 솔직하고 단순해 보이지만 그 순수함이 진짜 무기죠. 주변에 한 명쯤 있는 "저 사람 왜 저렇게 열심히 사나" 싶은 유형이에요. 근데 같이 있으면 나도 뭔가 하고 싶어지는 이상한 에너지가 있습니다.',
    mbti: ["ESTP", "ESFP", "ESTJ"],
    characters: [
      {
        name: "곤 프릭스",
        ability: "짜잔권 — 넨을 한 점에 집중시켜 폭발적인 위력으로 타격하는 강화계 필살기.",
        imageUrl: "/characters/gon.png",
      },
      {
        name: "우보 긴",
        ability: "빅뱅 임팩트 — 강화한 주먹 한 방에 압도적인 파괴력을 실어 전장을 뒤집는 순수 강화계 기술.",
        imageUrl: "/characters/uvogin.png",
      },
    ],
  },
  {
    key: "H",
    name: "방출계",
    en: "EMISSION",
    tagline: "넨을 신체에서 분리해 원거리로 날려보내는 계통입니다.",
    desc: "넨을 몸에서 분리해서 날리는 계통이에요. 원거리 공격이 가능해서 실전에서 엄청 유용합니다. 단순히 멀리 쏘는 것 같지만, 몸에서 떨어진 넨을 유지하고 제어하는 것 자체가 난이도 높은 기술이에요. 거리와 위력이 동시에 중요해서 실전 감각이 특히 잘 드러나는 계통이죠.",
    ability: "오라 원거리 방출, 타격 전달, 넨 덩어리 투사",
    personality: '감정이 풍부하고 의리 하나는 진짜입니다. 겉으로는 허세를 부리거나 시끄러울 수 있는데 속은 누구보다 따뜻한 유형이에요. 소중한 사람을 건드리면 각오해야 합니다. 평소엔 제일 인간적인데 한번 폭발하면 제일 무서운 타입이죠.',
    mbti: ["ENFJ", "ESFJ", "ISFJ", "ENFP"],
    characters: [
      {
        name: "레오리오 파라디나이트",
        ability: "오라를 공간을 통해 전달해 원거리에서 타격을 가한다.",
        imageUrl: "/characters/leorio.png",
      },
      {
        name: "레이저",
        ability: "강력한 오라 구체를 생성해 원거리에서 발사하는 방출계 최상위 수준의 능력.",
        imageUrl: "/characters/razor.png",
      },
    ],
  },
  {
    key: "T",
    name: "변화계",
    en: "TRANSMUTATION",
    tagline: "넨의 성질을 전혀 다른 것으로 변환시키는 계통입니다.",
    desc: "넨의 성질을 다른 걸로 바꾸는 계통이에요. 전기도 되고 껌도 되고 뭐든 됩니다. 근데 재밌는 게 같은 변화계인데 키르아랑 히소카가 완전 다른 인간이에요. 키르아는 냉정하고 이성적인데 히소카는 예측불가 그 자체죠. 변화계의 스펙트럼이 제일 넓은 이유가 여기 있습니다. 자기 경험과 이미지가 넨의 성질에 강하게 반영되는 계통이에요.",
    ability: "넨 성질 변환 (전기/점성/탄성 등), 신체 능력과 결합한 복합 공격",
    personality: "겉으로 보이는 것과 속이 다른 경우가 많아요. 감정을 잘 드러내지 않거나 반대로 극단적으로 드러내거나 둘 중 하나입니다. 자기만의 기준이 확실하고 그 기준 안에서 움직여요. 적이면 제일 무섭고 아군이면 제일 믿음직한 타입이죠.",
    mbti: ["ISFP", "INFP", "ISTP", "ENTP"],
    characters: [
      {
        name: "키르아 조르딕",
        ability: "칸무루 — 넨을 전기로 변화시켜 반응속도와 이동속도를 자동으로 끌어올리는 능력.",
        imageUrl: "/characters/killua.png",
      },
      {
        name: "히소카 모로우",
        ability: "번지검 — 넨을 점성과 탄성을 동시에 지닌 물질로 변화시켜 공격과 방어에 활용한다.",
        imageUrl: "/characters/hisoka.png",
      },
    ],
  },
  {
    key: "G",
    name: "구현화계",
    en: "CONJURATION",
    tagline: "넨을 사용해 물체를 현실에 실체화하는 계통입니다.",
    desc: "넨으로 물체를 실체화하는 계통이에요. 조건이 복잡하고 제약이 많을수록 강해지는 특이한 구조입니다. 6계통 중 가장 개성 강한 능력들이 여기서 나오는데 그게 우연이 아니에요. 구현화계 사용자들은 자기만의 세계관이 확실하고 그게 능력에 그대로 반영됩니다.",
    ability: "물체 실체화, 조건/제약을 걸수록 강력해짐",
    personality: "예민하고 까다로워 보이지만 속은 섬세합니다. 자기만의 세계관과 미학이 확실한 타입이죠.",
    mbti: ["ISTJ", "INTJ", "INTP"],
    characters: [
      {
        name: "크라피카",
        ability: "체인 제일 — 사슬을 이용해 상대를 구속하고 조건에 따라 다양한 효과를 발휘한다.",
        imageUrl: "/characters/kurapika.png",
      },
      {
        name: "카이토",
        ability: "크레이지 슬롯 — 랜덤 무기를 구현화하는 능력.",
        imageUrl: "/characters/kite.png",
      },
    ],
  },
  {
    key: "S",
    name: "조작계",
    en: "MANIPULATION",
    tagline: "사람과 물체를 자유자재로 조종하는 계통입니다.",
    desc: "사람이든 물체든 조종하는 계통이에요. 싸우기 전에 이미 판을 설계하는 스타일입니다.",
    ability: "생물/무생물 조종, 원격 제어",
    personality: "냉정하고 계획적이며 항상 주도권을 쥐려 합니다.",
    mbti: ["ENTJ", "ENTP", "INTJ"],
    characters: [
      {
        name: "이르미 조르딕",
        ability: "넨을 담은 바늘을 이용해 타인의 신체와 행동을 조작한다.",
        imageUrl: "/characters/illumi.png",
      },
      {
        name: "샤르나크 류세이",
        ability: "안테나를 통해 대상을 원격으로 조종한다.",
        imageUrl: "/characters/shalnark.png",
      },
    ],
  },
  {
    key: "J",
    name: "특질계",
    en: "SPECIALIZATION",
    tagline: "기존 계통으로 설명할 수 없는 고유 능력 계통입니다.",
    desc: "다른 계통 규칙을 따르지 않고 개인의 조건과 서약에 의해 성능이 결정되는 특수한 계통입니다.",
    ability: "고유 능력, 규칙 초월",
    personality: "강한 존재감과 독자적인 성향을 지닙니다.",
    mbti: ["INFJ", "INTJ", "ENFJ"],
    characters: [
      {
        name: "클로로 루실후르",
        ability: "스킬 헌터 — 타인의 넨 능력을 훔쳐 사용한다.",
        imageUrl: "/characters/chrollo.png",
      },
      {
        name: "크라피카",
        ability: "엠퍼러 타임 — 모든 계통을 100% 효율로 사용할 수 있다.",
        imageUrl: "/characters/kurapika_scarlet.png",
      },
    ],
  },
];
