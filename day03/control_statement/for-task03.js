// 심화 문제
// 1번 문제: 0~10까지 5만 빼고 출력
for(let i = 0; i <= 10; i++){
  if(i === 5){
    continue
  }
  console.log(i);
}


// 2번 문제: "012340123401234"
let numStr = '';

for(let i = 0; i < 15; i++){
  let num = i % 5;
  numStr += num;
}
console.log(numStr);


// 3번 문제: 1~10까지 제곱값 구하기
for(let i = 0; i < 10; i++){
  let num = i + 1;
  let squareNum = num * num;
  console.log(`${num}의 제곱은 ${squareNum}`);
}


// 4번 문제: 1~100까지 7의 배수의 개수 세기
let sevenCount = 0;
for(let i = 0; i < 100; i++){
  let num = i + 1;
  if(num % 7 === 0){
    sevenCount++;
  }
}
let forthMsg = `1~100 중 7의 배수의 갯수는 ${sevenCount}개`;
console.log(forthMsg);


// 5번 문제: 1~5까지 반복후 아래 결과 만들기 
// false, true, false, true, false
let boolStr = '';
for(let i = 0; i < 5; i++){
  let num = i + 1;
  let result = !(num % 2) ? 'true' : 'false'

  // boolean 을 이어서 문장으로 만들 되 마지막에는 , 없어야 함
  boolStr += result;
  if(num === 5){
    continue
  }
  boolStr += ', '
}
console.log(boolStr);


// 6번 문제 1~5까지 반복후 아래 결과 만들기
// "00001"
let sixStr = '';
for(let i = 0; i < 5; i++){
  let num = i + 1;
  let str = num % 5 ? 0 : 1
  sixStr += str;
}
console.log(sixStr);


// 7번 문제: 1~20중 10~15를 제외하고 출력하기
for(let i = 0; i < 20; i++){
  let num = i + 1;
  if(num >= 10 && num <= 15){
    continue
  }
  console.log(num);
}


// 8번 문제: 1~100까지 홀수만 더한 값과, 짝수만 더한 값의 차를 구하여 출력하기
let oddSum = 0;   // 홀수
let evenSum = 0;  // 짝수

for(let i = 0; i < 100; i++){
  let num = i + 1;

  if(num % 2){
    oddSum += num;
  } else {
    evenSum += num;
  }
}

let btwEvenOdd = oddSum - evenSum;
// 음수보정
if(btwEvenOdd < 0){
  btwEvenOdd *= -1;
}
let eightMsg = `홀수의 합 과 짝수의 합 차이는 ${btwEvenOdd}`
console.log(eightMsg);