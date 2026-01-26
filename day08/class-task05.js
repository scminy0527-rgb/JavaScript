// Airbnb
// trip()
// 메서드를 이용하면 회원의 70만원을 차감하고 마일리지를 쌓는다.
// 회원의 등급은 브론즈(1%), 실버(3%), 골드(5%), 플레티넘은(10%)

// Member
// 회원은 마일리지를 갖는다.

class Airbnb {
  // 본사 headquraret 회계
  static totalAirbnbMoney = 100_000_000;
  // airbnb 한국 지사의 가격
  tripFee = 700_000;
  constructor(serverLoc) {
    this.serverLoc = serverLoc;
  }

  trip(member) {
    // 유저가 70만원 충분하게 가지고 있는지?
    if (member.money >= this.tripFee) {
      // 멤버 돈 사용 및 포인트 적립
      console.log(
        `${member.name}님 예약이 완료 되었습니다. 즐거운 여행 되세요`,
      );
      member.money -= this.tripFee;

      let accMile = 0;
      let accRate = 0.01;

      switch (member.rate) {
        case "Bronze":
          accMile = this.tripFee * 0.01;
          break;

        case "Silver":
          accMile = this.tripFee * 0.03;
          break;

        case "Gold":
          accMile = this.tripFee * 0.05;
          break;

        case "Platinum":
          accMile = this.tripFee * 0.1;
          break;

        default:
          accMile = this.tripFee * 0.01;
          break;
      }
      member.mile += accMile;
      console.log(`${accMile}마일 적립 완료`);
      // 에어비앤비 돈 벌기
      Airbnb.totalAirbnbMoney += this.tripFee;
    } else {
      // 잔액 부족 경고
      console.log(`${member.name}님 잔액 부족`);
    }
  }

  // 에어비앤비 전체 매출 조회
  printTotalIncome() {
    console.log(`에어비앤비 전체 매출: ${Airbnb.totalAirbnbMoney}원`);
  }
}

class Member {
  constructor(name, money, mile, rate) {
    this.name = name;
    this.money = money;
    this.mile = mile;
    this.rate = rate;
  }
}

const airbnbKor = new Airbnb("에어비앤비 코리아 유한회사");

const member1 = new Member("신철민", 3_000_000, 5_000, "Gold");
const member2 = new Member("이규혁", 500_000, 0, "Bronze");
const member3 = new Member("이재용", 1_999_999_000_000, 999_999, "Platinum");

// 여행 예약
airbnbKor.trip(member1);
airbnbKor.trip(member2);
airbnbKor.trip(member3);

// 출력
console.log(member1);
console.log(member2);
console.log(member3);

airbnbKor.printTotalIncome();
