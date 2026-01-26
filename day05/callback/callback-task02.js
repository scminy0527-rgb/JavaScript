// 두 정수를 더하고 더한 결과값이 홀수라면 홀수, 짝수라면 짝수를 출력해주는 콜백함수 로직 만들기

// 1. 정수 더하기
// 2. 홀짝 여부 판단
// 3. 결과 출력


// 1. 정수만 더하 -> 홀짝 여부 판단
// 홀짝 여부 판단은 이제 콜백에 넘기기
function add(num1, num2, callback){
  callback(num1 + num2)
}

// 2. 홀짝 여부 판단 -> 결과 출력
// 결과 출력을 콜백에 넘기기
const checkOddEven = (num, callback) => {
  let result = (num % 2) ? '홀수' : '짝수'
  callback(num, result);
}

// 3. 결과 출력 해주는 마지막 콜백 함수
const print = (sumResult, data) => {
  console.log(`두 수의 합은 ${sumResult}, ${data} 입니다.`);
}


// 함수 실행
add(8, 7, (sumResult) => {
  checkOddEven(sumResult, print);
})

