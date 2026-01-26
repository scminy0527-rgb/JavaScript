// 화살표 함수 연습
// 모든 함수를 화살표 함수로 정의
// *단 반드시 상수(const) 키워드를 사용해야 한다

// 1. 0과 1 중 무작위로 5개 값을 입력하면 0의 개수와 1의 개수를 반환해주는 함수
// ex) countZero(0, 0, 1, 1, 1)
// ex) 0의 개수 2개, 1개의 3개

const countsZero = (num1, num2, num3, num4, num5) => {
  let oneCount = 0;
  let zeroCount = 0;
  let errorCount = 0;

  if(num1 === 1){
    oneCount++;
  } else if (num1 === 0){
    zeroCount++;
  } else {
    errorCount++;
  }
  if(num2 === 1){
    oneCount++;
  } else if (num2 === 0){
    zeroCount++;
  } else {
    errorCount++;
  }
  if(num3 === 1){
    oneCount++;
  } else if (num3 === 0){
    zeroCount++;
  } else {
    errorCount++;
  }
  if(num4 === 1){
    oneCount++;
  } else if (num4 === 0){
    zeroCount++;
  } else {
    errorCount++;
  }
  if(num5 === 1){
    oneCount++;
  } else if (num5 === 0){
    zeroCount++;
  } else {
    errorCount++;
  }

  let resultMsg = `0의 갯수: ${zeroCount}, 1의 갯수: ${oneCount}`;
  return resultMsg;
}

const countsNewZero = (num1, num2, num3, num4, num5) => {
  let zero = 5;
  let one = num1 + num2 + num3 + num4 + num5;
  zero -= one;

  let resultMsg = `0의 갯수: ${zero}, 1의 갯수: ${one}`;
  return resultMsg;
}

let numCount = countsNewZero(0,0,1,0,1);
console.log(numCount);



// 2. 정수(n)를 넘기면 정수까지 모두 더해주는 함수
// ex) sum(10)
// ex) 55
const sumIntNum = (intNum) => {
  let sumResult = 0;
  for(let i = 0; i<intNum; i++){
    let num = i+1;
    sumResult += num
  }

  return sumResult;
}

let secondResult = sumIntNum(10);
console.log(secondResult);