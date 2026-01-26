// 은행(Bank) 클래스가 존재한다.
// 회원(Member)들에게 관리비를 5만원 가져가야하는 경우
// 1. 회원이 가진 돈에서 5만원을 빼야한다.
// 2. 은행에 5만원을 추가해야한다.
class Bank {
  // 관리비는 전 지점이 동일하다고 가정
  // 해당 관리비는 은행 본사에서 통합 해서 한다고 가정
  static bankTotalMoney = 0;
  static manageFee = 50000;
  // 은행 멤버
  member = new Object();

  constructor(name) {
    console.log("은행이 개설하였습니다.");
    this.name = name;
  }

  enroll(user) {
    // 여기서도 원래 중복 가입 여부 확인해야함
    if (this.member[user.id] === undefined) {
      console.log(`${user.name}님 가입을 환영합니다.`);
      this.member[user.id] = user;
    } else {
      console.log(`${user.name}님은 이미 가입되어 있습니다.`);
    }
  }

  // 관리비 수금 (일괄)
  getManageFee() {
    for (let key in this.member) {
      // 5만원 있는 여부 가지고 다르게 해야 함
      if (this.member[key].money >= Bank.manageFee) {
        console.log(`${this.member[key].name}님, 관리비 5만원 감사합니다.`);
        this.member[key].money -= Bank.manageFee;
        Bank.bankTotalMoney += Bank.manageFee;
      } else {
        console.log(`${this.member[key].name}님 관리비 미납으로 경찰 신고`);
      }
    }
  }

  // 관리비 수금 (특정 인원만)
  getSomeMemberFee(member) {
    const key = member.id;
    const msg = `${member.name}님은 직권으로 따로 관리비 5만원 징수 합니다.`;
    console.log(msg);

    this.member[key].money -= Bank.manageFee;
    Bank.bankTotalMoney += Bank.manageFee;
  }

  // 은행이 갖고 있는 돈 확인
  printBankMoney() {
    console.log(`은행 보유 금액: ${Bank.bankTotalMoney}원`);
  }
}

// 멤버 클래스 정의
class Member {
  constructor(id, name, money) {
    console.log(`${name}님 생성`);
    this.id = id;
    this.name = name;
    this.money = money;
  }
}

// 은행 영업 개시
const scBank = new Bank("스탠다드차타드은행 역삼지점");

// 맴버 정의
const member1 = new Member("930526-2000000", "장보고", 100000);
const member2 = new Member("000101-3000000", "이규혁", 150000);

// 맴버 가입
scBank.enroll(member1);
scBank.enroll(member2);

// 관리비 빼 가기(일괄 수금)
scBank.getManageFee();

// 규혁이만 특별히 추가로 한번 더 관리비 받기
scBank.getSomeMemberFee(member2);

// 은행 확인
console.log(scBank);
scBank.printBankMoney();
