// 매개변수의 타입, 리턴 타입
// 정수를 전달하면 5의 배수의 유무를 확인하고 출력

// 매개변수 (숫자)
const check5Baesu = (num, callback) => {
  let result = (num % 5) ? '5의 배수 아님' : '5의 배수';

  // 매개변수: 문자형
  callback(result);
}

const print = (data) => console.log(data);

// 5의 배수 넣어보기 (반환 타입: void)
check5Baesu(10, print);



// 2개의 정수를 전달해서 큰 값과 작은 값을 반환해주는 함수
// 매개변수: 숫자형
const compareTwoNum = (num1, num2, callback) => {
  // 방어 리턴
  // ealry return 
  let maxNum = 0;
  let minNum = 0;

  maxNum = (num1 > num2) ? num1 : num2;
  minNum = (num1 < num2) ? num1 : num2;

  // 콜백함수: 숫자형 두개, 반환형: 문자형
  // 결과를 전달 하면 하나의 문장 형태로 반환을 해주는 함수
  return callback(maxNum, minNum);
}

// 매개변수: 숫자형
const resultReturn = (max, min) => {
  // 문구 만들기 (큰수 작은수를 비교하는 문장 만들기)
  let result = `두 정수 중에서 큰 값은 ${max}, 작은 값은 ${min} 입니다.`;

  // 반환형: 문자형
  return result;
}

// 결과 보기
let result = compareTwoNum(10, 3, resultReturn);
console.log(result);