// 문자열의 매쏘드
// .indexof()
// 매쏘드는 함수 보다는 적은 영역
// 해당 기능은 문자열 에서만 사용 가능
// 해당 문자의 index 번호를 리턴하는 매써드

// console.log('abcdefg'.indexOf('c') + 4);


// .charAt()
// 어떤 문자열 값에 []를 쓴 거와 비슷함
// []쓰는거는 인덱싱하는거임 
// console.log('abcd'.charAt(2));

// .length
// 문자열 또는 배열의 길이를 알려주는것 ()없음, 속성


// * 값은 모두 변수에 담을 것
// 브론즈
// 1. 3개의 정수를 받아서 3개를 모두 빼주는 함수
function minusAllInt(num1, num2, num3){
  let sumNum = num1 + num2 + num3;
  return -sumNum;
}
let bzNum1 = 10;
let bzNum2 = 20;
let bzNum3 = 30;
let result1 = minusAllInt(bzNum1, bzNum2 ,bzNum3);
let bz1Msg = `브론즈1\n${bzNum1}, ${bzNum2}, ${bzNum3}를 모두 빼면 ${result1} 입니다.\n`
console.log(bz1Msg);


// 2. 어떤 값을 받으면 값을 출력해주는 함수
function printResult(variable){
  console.log(variable);
}
printResult(22);


// 3. 이름과 나이를 전달하면 이름, 나이, 만나이를 출력해주는 함수
function printNameAgeRage(userName, age){
  let result = `\n${userName}님의 나이는 ${age}세, 만 나이는 ${age-1}세 입니다.\n`;
  console.log(result);
}
printNameAgeRage('신철민', 25);


// 실버
// 1. 홍길동을 n번 출력해주는 함수
function printGildongByN(repeatNum){
  let repeatStr = '홍길동';
  console.log(`${repeatStr}을 ${repeatNum}번 반복`);
  for(let i = 0; i < repeatNum; i++){
    console.log(repeatStr);
  }
}
printGildongByN(6);


// 2. 어떤 값을 전달하면 그 값까지 모두 더해주는 함수
function sumAllNum(n){
  let total = 0;
  for(let i = 0; i < n; i++){
    let num = i+1
    total += num
  }
  return total;
}

let silverResult = sumAllNum(10);
console.log(silverResult);

// 골드
// 1. 1~n까지 중 홀수만 출력해주는 함수
function printOddNum(num){
  for(let i = 0; i < num; i++){
    let realNum = i + 1
    // && 연산자는 조건이 침 이면 수행할 간단한 로직 하기에 좋음 (이때 조건은 단일조건)
    (realNum % 2) && console.log(realNum);
  }
}
printOddNum(30);

// 2. 1~n까지 중 짝수의 합을 더하고 
// 만약 n값이 100이 넘는다면 100까지만 더한 값을 반환해주는 함수
function addEvenNum(n){
  let evenTotal = 0;
  for(let i = 0; i < n; i++){
    let num = i + 1;
    // 더해지는 값이 100 초과 하면 루프 중지
    if(num > 100){ break; }
    // 짝수만 더하기
    if(num % 2 === 0){
      evenTotal += num;
    }
  }
  return evenTotal
}

let n = 200;
let evenSumResult = addEvenNum(n);
let resultMsg = `1부터 ${n}까지 짝수의 총 합은 ${evenSumResult} 입니다.\n(단 n이 100 넘어가면 100까지만 더한 결과임)`;
console.log(resultMsg);


// 3. 문자열과 찾을 문자를 입력 받고
// 문자열에서 문자의 개수를 반환해주는 함수
console.log('abcadae'.indexOf('a'));
function findCharAtStr(textString, char){
  let numOfChar = 0;
  let strLength = textString.length;

  for(let i = 0; i < strLength; i++){
    if(textString[i] === char){
      numOfChar++;
    }
  }
  return numOfChar;
}

let testString = 'abcadae';
let testChar = 'a';
let testResult = findCharAtStr(testString, testChar);
let testMsg = `${testString}에 문자${testChar}는 ${testResult}개 있습니다.`
console.log(testMsg);


// 플레티넘
// 1. 값을 3개 입력받아서 제일 큰 값과 작은 값을 알려주는 함수 
// 알고리즘
// 10  9 8
// 10 8 9
// 


function compareNumbers(num1, num2, num3){
  let highNum = 0;
  let minNum = 0;

  // 요것도 간소화 가능하긴 함
  // 먼저 가장 큰 수 구하기
  if(num1 > num2){
    highNum = num1;
  } else {
    highNum = num2;
  }
  if(num3 > highNum){
    highNum = num3
  }

  // 가장 작은 수 구하기
  if(num1 < num2){
    minNum = num1
  } else {
    minNum = num2;
  }
  if(num3 < minNum){
    minNum = num3;
  }

  let msg = `${num1}, ${num2}, ${num3} 중 가장 큰 수는 ${highNum}, 가장 작은 수는 ${minNum} 입니다.`;
  console.log(msg);
}

// 이번에는 인접한 두개 그룹으로 잡아서 나온 값 가지고 옆이랑 다시 그룹 짓는 식으로 if 없이
const compareNumNewVer = (num1, num2, num3) => {
  let maxNum = 0;
  let minNum = 0;

  // 값 할당 하는 부분은 삼항연산자 쓰면 코드 길이를 좀 더 줄이기 가능
  // 최대값 찾기
  maxNum = num1 > num2 ? num1 : num2;
  maxNum = maxNum > num3 ? maxNum : num3;
  // 최소값 찾기
  minNum = num1 < num2 ? num1 : num2;
  minNum = minNum < num3 ? minNum : num3;

  // 결과
  let msg = `${num1}, ${num2}, ${num3} 중 가장 큰 수는 ${maxNum}, 가장 작은 수는 ${minNum} 입니다.`;
  console.log(msg);
}

// compareNumbers(9, 14, 15);
compareNumNewVer(9, 14, 19);


// 2. 문자열을 입력하고, 문자열에서 지울 문자를 입력받아 지워주는 함수
// ex) myFuc("apple", a) 
// 결과: pple
function delCharAtStr(textString, char){
  let strLength = textString.length;
  let newStr = '';

  // 순차적으로 지우기: 순차적으로 쌓되, 지워야 하는 문자는 제외하고 쌓기
  for(let i = 0; i < strLength; i++){
    charComponent = textString[i];
    if(charComponent !== char){
      newStr += charComponent
    }
  }
  return newStr;
}

let originStr = 'apple';
let delChar = 'p';
let delResult = delCharAtStr(originStr, delChar);
let delResultMsg = `${originStr}에서 ${delChar}를 뺀 결과는 ${delResult} 입니다.`
console.log(delResultMsg);


// 다이아
// 1. 한글을 정수로 바꿔주는 함수 (일공이사 -> 1024)
// 단 공 부터 시작하면 순수 숫자열로 하면 표현이 안될 수 있음
// ex) 010 은 정수로 표현하기 애매
function changeKorToInt(koreanStr){
  let standard = '공일이삼사오육칠팔구';
  let lenStr = koreanStr.length;
  let resultStr = ''

  for(let i = 0; i < lenStr; i++){
    let charStd = koreanStr[i];
    resultStr += standard.indexOf(charStd);
  }
  return resultStr
}

let beforeKor = '공공구칠'
let changeResult = changeKorToInt(beforeKor);
let changeMsg = `${beforeKor} -> ${changeResult}`;
console.log(changeMsg);



// 2. 정수를 한글로 바꿔주는 함수 (1024 -> 일공이사)
function changeIntToKor(intNum){
  let standard = '공일이삼사오육칠팔구';
  let changeResult = '';

  // 정수를 문자열로 만들어서 각 자릿수를 참조할 수 있게 하기
  let strIntNum = '' + intNum;
  // String(intNum) 도 가능
  // strIntNum 의 길이 측정
  let lengthIntNum = strIntNum.length;

  for(let i = 0; i < lengthIntNum; i++){
    let standardInt = parseInt(strIntNum[i]);
    changeResult += standard[standardInt];
  }

  // 결과 반환
  return changeResult;
}

let beforeInt = 2026;
let intToStrResult = changeIntToKor(beforeInt);
let finalResultMsg = `${beforeInt} -> ${intToStrResult}`;
console.log(finalResultMsg);