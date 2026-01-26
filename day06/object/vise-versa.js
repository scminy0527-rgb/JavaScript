
// 코인 락커 문제

// 코인 락커는 비어있는 락커는 사용할 수 있고, 이미 누가 쓰고 있는 락커는 사용 못함
// 그리고 시간에 따라서 사용 요금이 증가함


// 락커 이름
// 결제 시간 단위
// 시간 단위 별 결제 금액
// const locker1 = new CoinLocker('locker-A1', 3, 1000); 의 의미는
// 3시간당 1천원 / 처음 천원 결제하면 3시간 사용 가능,
// 만약 찾으러 왔을 때 시간이 초과 되면 초과된 만큼 돈 내야 함
// 예를 들어서 5시간 있다 오면 추가요금 천원
// 만약 시간 단위가 3시간 인데, 3시간 2분 뒤에 오면 단 2분이 지났더라도 시간 단위(3시간) 구간 금액을 내야 함
// 6시간 5분 있다 오면 추가요금 2천원 (3시간+3시간+3시간) 기준으로 내야 함

// 락커 각각 추상화
function CoinLocker(lockerId, lockerName, timePeriod, price){
  this.lockerId = lockerId
  this.lockerName = lockerName;
  this.timePeriod = timePeriod;
  this.price = price;
}

// 락커 집합 구역 (해당 구역은 어디 구역인지, 주소 이름 등등)
function LockerArea(locCode, areaName, address){
  this.locCode  = locCode;
  this.areaName = areaName;
  this.address = address;

  this.coinLockers = new Object();

  // 락커 할당
  // 일단 코인 락커를 설치할 구역이 정해지면 각각 락커를 하나씩 들고 와야 함
  this.addLocker = (locker) => {
    if(this.coinLockers[locker.lockerId] === undefined){
      this.coinLockers[locker.lockerId] = locker
    } else {
      console.log('락커 아이디 중복 오류');
    }
  }

  // 사용 가능한 락커 및 찾기 가능한 확인
  // 사용자가 락커를 사용하기 위해서 터치 스크린을 터치 했을 때 해당 함수가 실행되어서
  // 사용 가능한 락커 함이 터치 가능하게 바뀐다고 가정하기
  this.checkLockerState = (type) => {
    for(let lockerId in this.coinLockers){

      // 모든 락커 순회 (각 락커)
      let locker = this.coinLockers[lockerId];
      let lockerName = locker.lockerName;
      let timePeriod = locker.timePeriod;
      let price = locker.price;

      if(locker.nowUsing !== true && type === 'using'){
        // 사용 가능 락커 표시
        let result = `${lockerName}락커 사용가능 ${timePeriod}시간 당 ${price}원`;
        console.log(result);
      }

      if(locker.nowUsing === true && type === 'retrieve'){
        // 찾기 가능 락커 표시
        let result = `${lockerName}락커 사용중`;
        console.log(result);
      }
    }
  }

  // 여기서 관리자가 특정 보관함을 고장 처리하는 기능도 넣을 수 있음


  // 락커 사용
  // 이제 구역에 코인락커들이 생기면 사용자는 락커를 사용할 수 있음
  // 이때 금액 지불 및 비밀번호를 올바르게 설정 해야함
  this.usingLocker = (lockerId, password, money = 0) => {
    let locker = this.coinLockers[lockerId];
    let nowUsing = locker.nowUsing;
    let lockerName = locker.lockerName
    let timePeriod = locker.timePeriod

    if(nowUsing){
      console.log(`해당 ${lockerName} 락커는 이미 사용중 입니다. 다른 락커를 선택해주세요`);
    } else {
      // 요금 낸 여부 확인
      if(money >= locker.price){
        // 해당 락커 사용 가능
        // 비밀번호 검증
        if(password.length === 6){
          // 6자리 입력한게 맞음
          // 사용 처리
          locker.nowUsing = true;
          locker.password = password
  
          let usingResult = `${lockerName}락커 보관 완료. ${timePeriod}시간 초과 시 초과요금 발생`
          console.log(usingResult);

          let changeInfo = `${money}원 지불, 거스름돈 ${money - locker.price}원`;
          console.log(changeInfo);
        }
      } else {
        // 돈 모자르거나 안낸 경우
        let moneyInfo = `돈이 모자릅니다.`
        console.log(moneyInfo);
      }

    }
  }


  // 락커에서 찾기
  // 자신이 보관했던 짐을 찾는거도 가능 (이때 비밀번호 및 넘은 시간에 따라서 추가 요금 발생)
  this.retrieveLocker = (lockerId, password, time, money = 0) => {
    let locker = this.coinLockers[lockerId];
    let nowUsing = locker.nowUsing;
    let price = locker.price
    let lockerName = locker.lockerName;
    let timePeriod = locker.timePeriod;
    let lockerPw = locker.password;

    // 추가 요금 계산
    let extraPay = parseInt(time / timePeriod) * price;

    // 사용자가 찾아야 할 올바른 보관함을 선택한 여부
    if(nowUsing && (lockerPw === password)){
      if(extraPay === 0){
        // 기본 요금 내에 찾기
        // 사용 초기화
        locker.nowUsing = false;
        locker.password = ''
        console.log(`${lockerName}보관함을 사용해주셔서 감사합니다.`)
      } else if(extraPay > money){
        // 돈 모자름, 더 내야함
        console.log(`${lockerName}보관함 추가 요금 ${extraPay-money}원 만큼 더 필요합니다.`)
      } else {
        // 추가 요금 냄
        locker.nowUsing = false;
        locker.password = ''
        console.log(`${lockerName}보관함 추가 요금 ${extraPay}원 지불 완료. 거스름돈 ${money-extraPay}원`);
      }
      
    } else {
      console.log('올바른 보관함을 선택 및 올바른 비밀번호를 입력해주세요');
    }

  }
}


// 사용 부분
// 1. 일단 락커를 정의
const locker1 = new CoinLocker('locker-A1', 'A01', 3, 1000);
const locker2 = new CoinLocker('locker-A2', 'A02', 2, 2000);
const locker3 = new CoinLocker('locker-A3', 'A03', 3, 8000);

// 2. 락커를 설치 할 구역에 락커를 설치
const lockerArea = new LockerArea('area-a-01', '강남역 A 보관함', '서울시 강남구 역삼동');

lockerArea.addLocker(locker1);
lockerArea.addLocker(locker2);
lockerArea.addLocker(locker3);

// 3. 사용자가 와서 터치스크린 내 보관 터치
// 사용 가능한 락커를 보여주기
console.log('사용자가 와서 사용 선택');
lockerArea.checkLockerState('using');
console.log('\n');


// 4. 락커를 사용
// 비밀번호를 할당
// 단 비밀번호는 6자리를 아래와 같이 넣어야 함, 6자리가 아닌 경우에는 다시 비밀번호 출력하라는 안내문 출력
// 해당 경우는 locker1 을 사용한 경우
console.log('사용자가 와서 사용');
lockerArea.usingLocker(locker1.lockerId, '970527', 10000);
console.log('\n');

console.log('사용자가 와서 사용 선택');
lockerArea.checkLockerState('using');
console.log('\n');


// 이제 다른 사용자 와서 락커 중복 사용하려함 확인
console.log('이제 다른 사용자 와서 락커 중복 사용하려함, 그리고 다른 사용 가능한 락커 사용');
lockerArea.usingLocker(locker1.lockerId, '930526', 10000);
lockerArea.usingLocker(locker2.lockerId, '930526', 10000);
console.log('\n');

// 사용 가능한 락커 및 락커를 찾기
console.log('사용자가 와서 사용 선택');
lockerArea.checkLockerState('using');
console.log('\n');

// 사용자가 터치 스크린 와서 락커 찾기 버튼 눌러서 찾을 수 있는 락커 보기
lockerArea.checkLockerState('retrieve');
// 사용자가 찾을 함을 선택 하고 비밀번호 입력 및 경우에 따라서 추가 요금 내기
console.log('사용자가 와서 락커 찾기');
lockerArea.retrieveLocker(locker1.lockerId, '970527', 7, 5000);


console.log('qa');
lockerArea.checkLockerState('using');
console.log('\n');

// 락커를 찾기
// 락커를 찾을 때는 자기가 맡긴 락커에 비밀번호를 입력 및 몇시간 뒤에 찾으로 왔는지 따라서 결제금액 뜸
// 이때 우리는 time 모듈을 쓰는게 아니기에 몇시간 뒤에 온지는 임의로 정수로 시간 단위로 넣기

// ex) RetrieveLocekr(락커 번호, 보관 시간, 추가요금 = 0)
// 단 만약 추가요금이 나오는데 요금을 할당 안했으면 추가요금 알림 뜸
// 추가 요금을 내면 돈 모자르면 모자르다. 맞으면 감사하다, 초과 되면 거스름돈 내보내 주는 출력문
