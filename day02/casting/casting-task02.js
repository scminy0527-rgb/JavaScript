// 형변환 문제
// 1번 문제
// 어떤 값이 실수인지 정수인지 확인하기
const number = 3.5
const checkNumber = parseInt(number)
// 혹은 1로 나누었을 때 나머지가 있다면 정수가 아니라 실수 라고도 판단할 수 있다.

const numberType = number === checkNumber ? '정수입니다.' : '실수입니다.'
// ex) 1.7 이라면 실수입니다.
// ex) 1 이라면 정수입니다.
console.log(`${number}라면 ${numberType}`);



// 2번 문제
// 어떤 값이 정수인지 아닌지 확인하기
const number2 = '가나다'
const checkNumber2 = parseInt(number2);
console.log(checkNumber2);

let msg2;

// 먼저 숫자형 여부 판단 
checkNumber2 
  ? msg2 = '정수입니다.' : msg2 = '숫자형이 아닙니다.';

// ex) "10" 이라면 정수입니다.
// ex) "값" 이라면 숫자형이 아닙니다.
console.log(`${number2}이라면 ${msg2}`);


// 3번 문제
console.log('//// 3번 문제 ////');
// 어떤 값이 정수인지 실수인지 아닌지 확인하기
// ex) "값" 이라면 숫자형이 아닙니다.
// ex) "10" 이라면 정수입니다.
// ex) "10.8" 이라면 실수입니다. 

// 먼저 스트링 형태든 숫자 형태든 먼저 실수로 바꾸기
const thirdNum = '값';
const thirdFloat = parseFloat(thirdNum);
const thirdInt = parseInt(thirdNum);

const notNumMsg = '숫자형이 아닙니다.';
const intNumMsg = '정수입니다.';
const floatNumMsg = '실수입니다.';

let numMsg;

// 일단 해당 문자열이 숫자로 되는지 아닌지 먼저 판단 해야함
// +"10" 또한 형 변환
thirdFloat  
  // 만약 숫자 형이고, 숫자가 정수 라면 정수 실수 라면 실수
  ? thirdFloat === thirdInt 
    ? (numMsg = intNumMsg) : (numMsg = floatNumMsg) 
  // 숫자가 아니라면: 숫자형이 아닙니다.
  : numMsg = notNumMsg

// 최종 메세지 작성 및 출력
const finalMsg = `${thirdNum} 이라면 ${numMsg}`;
console.log(finalMsg);
