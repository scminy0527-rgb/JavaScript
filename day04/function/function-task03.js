// 함수 문자열을 뒤집어 주는 함수
// reverse

const reverse = (str) => {
  // length 로 문자열의 길이 확인 가능
  let reverseStr = ''
  for(let i = 0; i < str.length; i++){
    console.log(str[str.length - 1 -i]);
    reverseStr += str[str.length - 1 -i];
  }
  return reverseStr;
}

let result = reverse('abcd');
console.log(result);



// 가변 매개변수를 이용해서 전달 받은 모든 값을 더해서 반환해주는 함수
const sumAllNum = (...numbers) => {
  // 해당 숫자의 원소갯수 구하기
  console.log(`${numbers} 전체의 합 구하기`);
  let numOfNumbers = numbers.length;
  let total = 0;
  for(let i = 0; i < numOfNumbers; i++){
    total += numbers[i];
  }
  return total;
}

let sumResult = sumAllNum(1,2,3,4,5,6,7,8,9,10);
console.log(sumResult);