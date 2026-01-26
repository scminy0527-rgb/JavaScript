// 은행(Bank)
// 이름(name), 계좌(account)

// 입금(deposit)
// 은행에서 관리하는 유저의 돈(account)이 증가
// 유저의 돈(moeny)이 감소

// 출금(withdraw),
// 은행에서 관리하는 유저의 돈(account)이 감소
// 유저의 돈(돈)이 증가

// 계좌이체(transferMoney)
// 은행을 통해 유저1 -> 유저2 입금
// 유저1 돈(account) 감소
// 유저2 돈(account) 증가

// user1(User)
// 이름(name), 돈(돈)

// user2(User)
// 이름(name), 돈(돈)

function User(identify, name, money) {
  this.identify = identify;
  this.name = name;
  this.money = money;
}

function Bank(name) {
  this.bankName = name;
  this.account = new Object();

  // 내부 매소드 정의
  // 1. 계좌 개설 매쏘드 (회원가입)
  this.makeAccount = (user) => {
    let name = user.name;
    if (this.account[user.identify] === undefined) {
      this.account[user.identify] = new User(user.identify, name, 0);

      // 계좌 개설 축하
      let msg = `${name}님, ${this.bankName} 계좌를 개설해주셔서 감사합니다.`;
      console.log(msg);
    } else {
      // 아이디 중복 오류
      let result = "식별자 중복 오류 (식별자 확인 및 기존 가입 여부 확인 필요)";
      console.log(result);
    }
  };

  // 2. 입금 매쏘드
  this.deposit = (user, money) => {
    if (this.account[user.identify] === undefined) {
      console.log("저의 은행 회원이 아닙니다. 먼저 계좌를 개설해주세요");
    } else {
      // 회원 정보 있기에 입금 시켜야 함
      // 먼저 유저가 충분한 돈을 가지고 있는지 봐야 함
      if (user.money >= money) {
        // 입금 가능
        // 계좌 돈 늘리기 유저 돈 줄이기
        this.account[user.identify].money += money;
        user.money -= money;

        let msg = `${user.name}님, ${money}원 입금 완료 되었습니다. 계좌 잔액: ${this.account[user.identify].money}`;
        console.log(msg);
      } else {
        // 돈 모잘라서 입금 불가능
        console.log("돈이 모잘라서 입금이 불가능합니다.");
      }
    }
  };

  // 3. 출금 매쏘드
  this.withdraw = (user, money) => {
    if (this.account[user.identify] === undefined) {
      console.log("저의 은행 회원이 아닙니다. 먼저 계좌를 개설해주세요");
    } else {
      // 계좌에 충분한 금액이 있는지 확인
      if (this.account[user.identify].money >= money) {
        // 출금 시행
        this.account[user.identify].money -= money;
        user.money += money;

        let msg = `${user.name}님, ${money}원 출금 완료 되었습니다. 계좌 잔액: ${this.account[user.identify].money}`;
        console.log(msg);
      } else {
        console.log("출금을 하기에 계좌 잔액이 부족합니다.");
      }
    }
  };

  // 4. 송금 매쏘드
  this.transper = (fromUser, toUser, money) => {
    let fromUserId = fromUser.identify;
    let toUserId = toUser.identify;

    if (
      this.account[fromUserId] === undefined ||
      this.account[toUserId] === undefined
    ) {
      console.log("보내는 자, 받는자 정보를 다시 한번 확인하세요");
    } else {
      if (this.account[fromUserId].money >= money) {
        // 송금 가능
        this.account[fromUserId].money -= money;
        this.account[toUserId].money += money;

        let msg = `${fromUser.name}님, ${toUser.name}님에게 ${money}원 송금 완료 되었습니다. 계좌 잔액: ${this.account[fromUserId].money}`;
        console.log(msg);
      } else {
        console.log("송금을 하기에 계좌 잔액이 부족합니다.");
      }
    }
  };
}

//
// 유저 및 은행 객체 생성
const user1 = new User("930526-1000001", "김철수", 200_000);
const user2 = new User("970527-1000002", "신철민", 500_000);
const scBank = new Bank("SC 제일은행");

// 유저들 은행 계좌 개설
scBank.makeAccount(user1);
scBank.makeAccount(user2);

// 유저들 입금 수행
scBank.deposit(user1, 100_000);
scBank.deposit(user2, 300_000);

// 출금 수행
scBank.withdraw(user2, 50_000);

// 송금 수행
scBank.transper(user1, user2, 80000);

console.log(user1);
console.log(user2);
console.log(scBank);
