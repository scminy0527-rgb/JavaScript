// 형변환 문제
// 1번 문제
// 어떤 값이 실수인지 정수인지 확인하기
// ex) 1.7 이라면 실수입니다.
// ex) 1 이라면 정수입니다.
let num1 = 1.7
let num2 = 1
let result = num2 % 1 ? "실수" : "정수"
console.log(result)

// parseInt
let temp = parseInt(num1)
let result2 = temp === num1 ? "정수" : "실수"
let result3 = temp - num1 ? "실수" : "정수"
console.log(result2)

// 2번 문제
// 어떤 값이 정수인지 아닌지 확인하기
// ex) "값" 이라면 숫자형이 아닙니다.
// ex) "10" 이라면 정수입니다.
let value1 = "10"
// +"10" === NaN, false로 취급되는 값
let value2 = "ㄱ"
let result4 = +value1 === 0 ? "0입니다" 
  : +value1 ? "정수입니다" 
    : "숫자형이 아닙니다."
    
console.log(result4)


// 3번 문제
// 어떤 값이 정수인지 실수인지 아닌지 확인하기
// ex) "값" 이라면 숫자형이 아닙니다.
// ex) "10" 이라면 정수입니다.
// ex) "10.8" 이라면 실수입니다. 
let data1 = "값"
let data2 = "10"
let data3 = "10.8"
let number = +data1
let isFloat = number % 1

let result5 = !number ? "숫자형이 아닙니다." 
  : isFloat ? "실수" : "정수"

console.log(result5)
