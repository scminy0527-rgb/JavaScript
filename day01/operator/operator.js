// 단항연산자
let num = 10;
// console.log(num);
// console.log(++num);
// console.log(num++);
// console.log(num);

let isBoolean = false;
// console.log(!isBoolean);
// 값이 있을 때 true, 없을 때 false 를 인식하게 된다.
// !붙어 있는건 boolean 타입 밖에 안나옴
// console.log(!10);
// console.log(!0);
// console.log(!num);

let num1 = 100;
let num2 = 17;

// console.log(num1 + num2); // 117
// console.log(num1 - num2);
// console.log(num1 * num2);

// **나머지 연산자 (%) [알고리즘 적으로 개발에 많이 쓰임]
// console.log(10 % 3);

// 몫 연산자 (/) 나눗셈 연산자
// console.log(10 / 3);

// 누적복합연산자 (계속 쌓이는거)
let money = 0;
money += 1000000;

// 비트코인
money /= 300;
money *= 10;

// console.log(money);

// 이게 js 의 가장 큰 단점
// 유연성
console.log(10 == '10');
console.log(10 === '10');

let num3 = 11;
console.log(11 != 12);
console.log(num3 !== 11);

let num4 = 10;

console.log(num3 <= num4);
console.log(num4 < num3);

// 논리 연산자의 특징4
// 3항 연산자

let result = true ? 'true 일 때' : 'false 일때'
console.log(result);