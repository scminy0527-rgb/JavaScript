// 매개변수의 타입, 리턴 타입
// 1. 정수를 전달하면 5의 배수의 유무를 확인하고 출력
const isMultipleByFive = (num, callback) => ( 
  callback(!(num % 5) ? "5의 배수" : "5의 배수가 아닙니다")
)

// 매개변수 number, function
// 리턴타입 void
isMultipleByFive(5, console.log)


// 2. 2개의 정수를 전달해서 큰 값과 작은 값을 반환해주는 함수
const getMinAndMax = (num1, num2) => {
  // 방어코드
  // ealry return
  if(typeof(num1) !== "number" || typeof(num2) !== "number") {
    return "잘못 입력하셨습니다"
  }

  if(num1 === num2){
    return "두 수가 같습니다"
  }else if(num1 > num2){
    return `큰 값: ${num1}, 작은 값: ${num2}`
  }else {
    return `큰 값: ${num2}, 작은 값: ${num1}`
  }
}

// 매개변수 타입: number, number
// 리턴타입: string
getMinAndMax(10, 20)

