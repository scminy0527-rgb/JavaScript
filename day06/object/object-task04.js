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

// 일상 생활을 하는 유저가 있을 거며
// 유저들의 계좌를 관리 하는 은행이 있을 거다.
// 여기서 은행이 유저의 가지고 있는 현금 까지 관리 하는건 주제넘는 짓

function User(name, money){
  this.name = name;
  this.money = money;
}

function Bank(){

  // 유저가 입력 되면 신원확인 (키 확인) 하는 매쏘드도 추가
  this.identify = (bank, user) => {
    for(let key in bank){
      let bankUser = bank[key];

      // 함수가 아니라 객체만 분출 (유저의 객체)
      if(typeof(bankUser) === 'object'){
        if(bankUser.name === user.name ){
          return key;
        }
      }
    }

    // 유저를 못찾음
    // 유저를 못찾았으면
    // 1. 가입이 안되어있어서 가입이 필요하거나
    // 2. 아니면 출금이나 송금에서 날로 먹으려는 과정
    return '유저색인오류'
  }

  // 입금 메소드
  // 일단 유저가 오면 유저를 식별 한 뒤에 식별된 유저의 계좌에 입금을 해줘야 함
  this.deposit = (bank, user, amount) => {
    console.log('입금');
    let userKey = this.identify(bank, user);

    // 여기서 원래는 고객이 가지고 있는 현금도 확인 해야함
    if(user.money >= amount){

      bank[userKey].account += amount;
      user.money -= amount;
    } else {
      console.log('입금을 하시기에는 돈이 모자릅니다.');
    }
  }

  // 입금은 돈을 입금하는거 지만 통장을 개설하는거 또한 입금이 될 수 있음.

  // 출금 메소드
  this.widtraw = (bank, user, amount) => {
    // console.log('돈 출금');
    // console.log('돈 입금');
    for(let key in bank){
      let bankUser = bank[key];
      if(typeof(bankUser) === 'object'){
        if(bankUser.name === user.name ){
          if(bankUser.account >= amount){
            // 츨금
            bankUser.account -= amount
            user.money += amount
          } else {
            // 아니면 경고 해야함
            console.log('잔고가 부족합니다.');

          }
        }
      }
    }

  }

  // 송금 메소드
  // 누가 누구한테 얼마를
  this.transper = (bank,from, to, amount) => {
    // 먼저 보내는 사람, 받는 사람 식별자 (키) 를 얻어야 함
    let fromKey = '';
    let toKey = '';

    // 보내는사람 및 받는사람 키 받기
    for(let key in bank){
      let bankUser = bank[key];
      if(typeof(bankUser) === 'object'){
        bankUser.name === from.name && (fromKey = key);
        bankUser.name === to.name && (toKey = key);
      }
    }

    // 돈 보내기 (원래 fm 대로 라면 트랜젝션 써야 함)
    if(bank[fromKey].account >= amount){
      // 송금 실행
      bank[fromKey].account -= amount;
      bank[toKey].account += amount;
    } else {
      console.log('이체를 하기에 잔액이 부족합니다.');
    }

  }
}

// user1(User)
// 이름(name), 돈(돈)
const shin = new User('신철민', 1000000)

// user2(User)
// 이름(name), 돈(돈)
const kim = new User('김항공', 500000);


// 일단 은행이 개설 함
// 초기에는 회원 없고 은행만 있는 상태
const bank = new Bank();

// 그리고 은행에 사람들이 가서 통장을 만듬
bank.user1 = {name: shin.name, account: 10000};

bank.user2 = {name: kim.name, account: 20000};


console.log(bank);
// console.log(shin)
// 메서드는 한 번씩 모두 사용
// 모든 유저의 이름과 돈을 출력


// user1 기준으로 돈 입금
bank.deposit(bank, shin, 500000);
console.log(bank);
console.log(shin);

// user1 기준으로 돈 출금
bank.widtraw(bank, shin, 200000);
console.log(bank);
console.log(shin);

// 송금 
bank.transper(bank, shin, kim, 50000);
console.log(bank);
console.log(shin);