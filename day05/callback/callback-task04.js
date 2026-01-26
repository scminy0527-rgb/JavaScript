// 1. 문자열을 받아서 반대로 순서를 바꾸고 출력
const reverseString = (str, callback) => {
  let reverseStr = '';
  let len = str.length;
  for(let i = 0; i < len; i++){
    reverseStr += str[len - 1 - i];
  }
  callback(str ,reverseStr);
}

const print = (origin, data) => {
  console.log(`${origin} => ${data}`);
}

// 결과 출력
reverseString('fuck',print);


// 2. 사용자가 입력한 값까지 누적 합한 후 결과값에 5를 곱하고 반환
// 이중 반환
const sumNumbers = (num, callback) => {
  let total = 0;
  for(let i = 0; i < num; i++){
    total += i+1;
  }

  // 해당 함수에서 나온 값을 가지고 콜백 함수를 돌린 반환값을 반환 하라
  return callback(total);
}

const mutipleFive = (num) => {
  // 받은 수를 5배 해서 반환해라.
  return num * 5;
}

// 실험
let secondResult = sumNumbers(10, mutipleFive);
console.log(secondResult);
