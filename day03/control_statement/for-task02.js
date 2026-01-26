// 1번 문제: 1~100까지 짝수만 출력해보기
console.log('\n\n1번 문제: 1~100까지 짝수만 출력해보기\n')
for(let i = 0; i < 100; i++){
  if((i+1) % 2 === 0){
    console.log(i+1);
  }
}


// 2번 문제: 0~9까지 반복 후 "12345678910" 출력하기
console.log('\n\n2번 문제: 0~9까지 반복 후 "12345678910" 출력하기\n')

// 초기값의 중요성
let numString = '';
for(let i =0; i < 10; i++){
  numString += (i + 1);
}
console.log(numString);


// 3번 문제: 1~10까지 반복후 i값이 홀수면 "홀수", 짝수만 "짝수" 출력하기
console.log('\n\n3번 문제: 1~10까지 반복후 i값이 홀수면 "홀수", 짝수만 "짝수" 출력하기\n')
for(let i =0; i < 10; i++){
  // 짝수 여부 확인
  if((i+1) % 2){
    console.log(`홀수`);
  } else {
    console.log(`짝수`);
  }
}


// 4번 문제: 1~20까지 중 3의 배수 출력하기
console.log('\n\n4번 문제: 1~20까지 중 3의 배수 출력하기\n')
for(let i = 0; i < 20; i++){
  let isN3 = !((i+1) % 3)
  if(isN3){
    console.log(i+1);
  }
}


// 5번 문제: 1~100까지 누적합 구하기
console.log('\n\n5번 문제: 1~100까지 누적합 구하기\n')
let total = 0;
for(let i = 0; i < 100; i++){
  total += (i+1);
}
console.log(total);


// 6번 문제: 1~100까지 홀수만 모두 더해서 출력
console.log('\n\n6번 문제: 1~100까지 홀수만 모두 더해서 출력\n')
let oddTotal = 0;
let limit = 100;

for(let i = 0; i < limit; i++){
  if((i+1) % 2){
    oddTotal += (i+1);
  }
}

console.log(`1부터 ${limit}까지 홀수 총합: ${oddTotal}`);


// 7번 문제: 1~77까지 수 중 홀수의 개수 구하기
console.log('\n\n7번 문제: 1~77까지 수 중 홀수의 개수 구하기\n');

let numOfOdd = 0;
let limit7 = 77;

for(let i = 0; i < limit7; i++){
  if((i+1) % 2){
    numOfOdd++;
  }
}

let finalMsg7 = `1부터 ${limit7}까지 홀수의 갯수는 ${numOfOdd}개`;
console.log(finalMsg7);