// 화살표 함수의 리턴
// 두 개 정수를 더해서 결과를 반환해주는 함수
const sum1 = (num1, num2) => { 
  if(num1 > num2){
    return num1 + num2 
  }
  return -1
}

// 중괄호와 return 키워드를 생략하면 통째로 리턴 값
const sum2 = (num1, num2) => num1 + num2
const sum3 = (num1, num2) => (
  num1 + num2
)

let result = sum2(10, 20)
console.log(result)

// 화살표 함수
// 매개변수가 1개라면 () 생략이 가능하다.
// 변수 1개를 받아서 1개를 출력
// *하나라도 무조건 () 소괄호를 감싸자!!
const print = data => console.log(data)