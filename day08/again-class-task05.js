// Airbnb
// trip()
// 메서드를 이용하면 회원의 70만원을 차감하고 마일리지를 쌓는다.
// 회원의 등급은 브론즈(1%), 실버(3%), 골드(5%), 플래티넘은(10%)

// Member
// 회원은 마일리지를 갖는다.
class Airbnb {
  constructor(airbnbName, airbnbMoney) {
    this.airbnbName = airbnbName;
    this.airbnbMoney = airbnbMoney;
  }

  // 여행
  trip(member) {
    member.memberMoney -= 700000;
    this.airbnbMoney += 700000;

    // 마일리지 증정
    switch (member.memberGrade) {
      case "브론즈":
        member.point += 700000 * 0.01;
        break;
      case "실버":
        member.point += 700000 * 0.03;
        break;
      case "골드":
        member.point += 700000 * 0.05;
        break;
      case "플래티넘":
        member.point += 700000 * 0.1;
        break;
      default:
        console.log("비회원은 마일리지를 적립할 수 없습니다.");
        break;
    }
  }
}

class Member {
  constructor(id, memberName, memberMoney, memberGrade) {
    this.id = id;
    this.memberName = memberName;
    this.memberMoney = memberMoney;
    this.memberGrade = memberGrade;
    this.point = 0;
  }
}

const airbnb = new Airbnb("세종비앤비", 10000000);
const member1 = new Member(1, "감대훈", 8000000, "골드");
const member2 = new Member(2, "문윤상", 1500000, "실버");
const member3 = new Member(3, "철당긴", 30000000, "플래티넘");
const member4 = new Member(4, "이규학", 10, "브론즈");

airbnb.trip(member1);
airbnb.trip(member4);
console.log(member1);
console.log(member4);
console.log(airbnb);
