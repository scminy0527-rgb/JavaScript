// 1번 문제 
const totalPrice = 30000;
const isMember = true;

// 배송비 구하기
// 1. 기본 배송비는 3,000원
const deliveryFee = 3000;
const freeDeliveryLimit = 50000;
const memberDiscountRate = 0.8;
// 2. 상품 금액이 50,000원 이상이면 배송비 무료 
// 3. 회원이면 배송비 20% 할인 적용

let finalDeliveryFee = deliveryFee;
totalPrice >= freeDeliveryLimit && (finalDeliveryFee = 0);
(isMember && finalDeliveryFee) && (finalDeliveryFee *= memberDiscountRate);

// 4. 최종 배송비를 계산하여 출력한다
const finalMessage = `총 주문금액: ${totalPrice}, 배송비: ${finalDeliveryFee}`;
console.log(finalMessage);

// 2번 문제
// 사용자의 거스름돈의 최소 동전 개수 구하기
// 동전의 종류 500, 100, 10
// 4790원8
const originPay = 8180;
let balance = originPay;

const coin500 = 500;
const coin100 = 100
const coin10 = 10;

// 먼저 낸 금액을 500원 으로 나누기
// 몫 나머지 개념
let numOf500 = parseInt(balance / coin500)
balance %= coin500;
let numOf100 = parseInt(balance / coin100)
balance %= coin100
let numOf10 = parseInt(balance / coin10);

const msg = `고객 지불금액: ${originPay}\n거스름돈: 500원 동전: ${numOf500}개\n100원 동전: ${numOf100}개\n10원 동전 ${numOf10}개`
console.log(msg);

