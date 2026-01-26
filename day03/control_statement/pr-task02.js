// 1번 문제: 1~100까지 짝수만 출력해보기
// 2번 문제: 0~9까지 반복 후 "12345678910" 출력하기
// 3번 문제: 1~10까지 반복후 i값이 홀수면 "홀수", 짝수만 "짝수" 출력하기
// 4번 문제: 1~20까지 중 3의 배수 출력하기
// 5번 문제: 1~100까지 누적합 구하기
// 6번 문제: 1~100까지 홀수만 모두 더해서 출력
// 7번 문제: 1~77까지 수 중 홀수의 개수 구하기

// 1번
for(let i = 0; i < 100; i++){
  let num = i + 1;

  if(num % 2 === 0){
    console.log(num);
  }
}

// 2번
let numStr = '';
for(let i = 0; i < 10; i++){
  numStr += (i+1)
}
console.log(numStr);

// 3번
for(let i = 0; i < 10; i++){
  let num = i + 1;
  let result = num % 2 ? '홀수':'짝수'
  let finalResult = `${num}은 ${result}`;
  console.log(finalResult);
}

// 4번
for(let i = 0; i < 20; i++){
  let num = i + 1;
  if(num % 3 === 0){
    console.log(num);
  }
}

// 5번

