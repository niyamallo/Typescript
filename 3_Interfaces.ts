type Gamer = {
  nickname: string;
  team: Team;
  healthBar: number;
};

type Monster = string;

const orangeMushroom: Monster = "cute";

type Friends = Array<string>;

// concrete 타입의 특정 값을 쓰는 방법
type Team = "red" | "blue" | "green" | "yellow";
type HealthBar = 1 | 5 | 10;

const niya: Gamer = {
  nickname: "niyamallo",
  team: "red",
  healthBar: 10,
};

// 오브젝트를 표현하는 방법은 type과 interface가 있다.
// 오브젝트의 모양을 결정한다는 역할은 같지만 type이 좀 더 활용할 수 있는게 많다.
interface Crossfitter {
  nickname: string;
  team: Team;
  healthBar: HealthBar;
}
// interface Hello = string 이런식으로 사용 불가
// type Hello = string; 이건 가능. type 키워드는 다양한 목적으로 사용될 수 있다.
// interface는 오로지 오브젝트의 모양을 타입스크립트에게 설명해 주기 위해 사용하는 키워드이기 때문.
interface ActiveBody extends Crossfitter {}

const mallo: ActiveBody = {
  nickname: "mallo",
  team: "yellow",
  healthBar: 5,
};

// 위의 내용을 interface 대신 type으로 표현하고싶다면,

// type Crossfitter = {
//     nickname: string;
//     team: Team;
//     healthBar: HealthBar;
//   }

// type ActiveBody = Crossfitter & {}

// const mallo: ActiveBody = {
//     nickname: "mallo",
//     team: "yellow",
//     healthBar: 5,
// };

// interface의 또 다른 특징으로는 property를 축적할 수 있다.
// type은 축적 불가
interface Human {
  name: string;
}
interface Human {
  lastName: string;
}
interface Human {
  health: number;
}

const traveler: Human = {
  name: "pinocchio",
  lastName: "wooden",
  health: 100,
};
