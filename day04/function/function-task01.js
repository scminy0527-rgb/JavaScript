// 1. 이름을 전달하면 이름을 다섯번 출력해주는 함수
// 2. 3개를 전달하면 3개를 모두 더해서 반환해주는 함수
// 3. 성과 이름을 받아서 풀네임을 출력해주는 함수
// 4. 2개를 전달 받아서 큰 값을 비교해서 결과를 반환해주는 함수
// 5. 1개를 전달 받아서 홀수인지 짝수인지 비교해서 결과를 반환해주는 함수


// 1. 이름을 전달하면 이름을 다섯번 출력해주는 함수
function printNameFive(userName){
  for(let i = 0; i < 5; i++){
    console.log(userName);
  }
}

printNameFive('신철민');


// 2. 3개를 전달하면 3개를 모두 더해서 반환해주는 함수
// 중요
function addThreeNum(num1, num2, num3){
  if(num2 === undefined){
    return num1;
  }

  if(num3 === undefined){
    return num1 + num2;
  }
  return num1 + num2 + num3;
}

// 매개변수에 값이 실수로 하나만 들어가는거도 고려해야함
result = addThreeNum(3, 6, 9);
console.log(result);


// 3. 성과 이름을 받아서 풀네임을 출력해주는 함수
function printFullName(lastName, firstName){
  let fullName = lastName + firstName
  console.log(fullName);
}

printFullName('신', '철민');


// 4. 2개를 전달 받아서 큰 값을 비교해서 결과를 반환해주는 함수
function checkTwoNum(num1, num2){
  // return (num1 >= num2) ? num1 : num2
  if(num1 > num2){
    return `큰 수: ${num1}`
  } else if (num1 === num2){
    return '두 수가 같습니다.'
  } else {
    return `큰 수: ${num2}`
  }
}

// 함수 사용
let check4Num1 = 19;
let check4Num2 = 19;
let checkResult = checkTwoNum(check4Num1, check4Num2);
let fourResult = `${check4Num1}과 ${check4Num2} 비교 결과: ${checkResult}`
console.log(fourResult);


// 5. 1개를 전달 받아서 홀수인지 짝수인지 비교해서 결과를 반환해주는 함수
function checkOddEven(num){
  let result = num % 2 ? '홀수' : '짝수';
  return result;
}

let checkNum = 15;
let fiveResult = checkOddEven(checkNum);
let resultMsg = `${checkNum}는 ${fiveResult}입니다.`
console.log(resultMsg);