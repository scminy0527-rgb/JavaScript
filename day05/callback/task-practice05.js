// 2개의 정수를 전달해서 큰 값과 작은 값을 반환해주는 함수
// 매개변수: 숫자형

const compareNumber = (num1, num2) => {
  // 일단 입력 되는 숫자에 대한 경우의 수 정의
  // 다중 if문으로 만들기 
  if(typeof(num1) !== 'number' || typeof(num2) !== 'number'){
    // 1. num1, num2 가 모두 혹은 둘 중에 하나라도 완전한 숫자가 아닐 때
    return '올바르게 숫자를 입력해주세요'
  } else if(num1 === num2){
    // 2. num1 === num2
    return `입력한 두 수 ${num1}, ${num2} 는 같습니다.`;
  } else if(num1 > num2){
    // 3. num1 > num2
    return `큰 수: ${num1}, 작은 수: ${num2}`;
  } else {
    // 4. num1 < num2
    return `큰 수: ${num2}, 작은 수: ${num1}`;
  }
}

let result = compareNumber(100, 150);
console.log(result);