// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.
function MartUser(name, age, point) {
  this.name = name;
  this.age = age;
  this.point = point;

  this.printName = () => {
    console.log(this.name);
  };
}

function Market() {}

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

const user1 = new MartUser("홍길동", 30, 3500);
const user2 = new MartUser("이순신", 22, 0);
const user3 = new MartUser("장보고", 66, 9500);

// 3명을 모두 마트에 등록 시킨다.
const market = new Market();
market.user1 = user1;
market.user2 = user2;
market.user3 = user3;

// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.
// 유저의 이름만 모두 출력한다.
console.log(market.user1.printName());

// 포인트 출력
// 모든 유저는 자신의 이름을 출력할 수 있는 printName 메서드를 가지고 있다.
