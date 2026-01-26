// 모든 값을 변수로 선언

// 1번 문제
// 1. 키, 나이를 입력
let userName = '홍길동';
let userHeight = 120;
let userAge = 15;

// 2. 놀이공원에서 어린이 놀이기구 탑승 여부 확인하기
const heightLimit = 130;
const ageLimit = 20;
const availRideMessage = '탑승 가능'
const notAvailRideMsg = '탑승 불가'

let isAvailRide = (userHeight <= heightLimit) && (userAge < ageLimit);

// 3. 130cm 이하만 탑승 가능 그리고 성인은 탑승 불가
// 4. 나머지는 탑승 가능
// 사람의 정보에 따라 탑승 여부를 출력하기
let availMsg = isAvailRide ? availRideMessage : notAvailRideMsg;
let totalMsg = `${userName}님은 해당 놀이기구에 ${availMsg}입니다.\n`

console.log(totalMsg);

// 2번 문제
// 1. 주차 시간, 요일 여부 입력(월, 화, 수, 목, 금, 토, 일)
const carNumber = "01다 1234"
const parkingTime = 5;
const dayName = '일';

// 2. 기본 주차 요금은 시간당 1,000원
// 3. 주말이면 총 요금의 20% 추가 요금이 붙는다
// 4. 이용 시간이 5시간 초과이면 총 요금에서 10% 할인
const mon = '월'; const tue = '화'; const wed = '수'; const thu = '목';
const fri = '금'; const sat = '토'; const sun = '일';
const parkPrice = 1000;
const weekendHigh = 1.2;
const saleStartTime = 5;
const saleTimeRate = 0.9;

// 주말여부 및 할인 시간 넘김 여부 확인
const isWeekend = dayName === sat || dayName === sun;
const isOverSaleTime = parkingTime > saleStartTime;

// 할증 및 할인 적용 전 요금 계산
let totalPrice = parkingTime * parkPrice;

// 주말 및 5시간 이상 확인 후 가격조정
// isWeekend ? totalPrice *= weekendHigh : totalPrice *= 1;
isWeekend && (totalPrice *= weekendHigh)
isOverSaleTime && (totalPrice *= saleTimeRate)
 
// 최종 주차 요금 출력하기
console.log(`차량번호: ${carNumber}\n주차시간: ${dayName}요일 ${parkingTime}시간\n총 요금: ${totalPrice}원`);