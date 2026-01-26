// Casting(형변환, 타입변환)
// 1. 자동 형변환
// number 10 - 정수
// number 0.5 - 실수
// 1) 정수 + 실수 = 실수
// console.log(10 + 0.5)

// 2) 정수 + 문자열 = 문자열(연결)
// console.log(10 + "10")
// console.log("10" + 10)
// console.log(typeof(10 + "10"))

// 3) 단항연산자 + 문자열 = 숫자형
console.log(+"10")
console.log(-"10")
console.log(+"ㄱ") // NaN: Not a Number
console.log(typeof(+"10"))

// 4) 낫연산자 + 값 = 논리형
console.log(!10)

// 2. 강제 형변환
// 타입() - 앞글자 대문자
// 숫자형 -> 문자열
// console.log(String(10))
// console.log(typeof(String(10)))

// 문자열 -> 숫자형
// console.log(Number("15"))
// console.log(typeof(Number("15")))
// console.log(Number("값"))
// console.log(typeof(Number("값")))

// 문자열 -> 논리형
// console.log(Boolean("ㄱ"))
// console.log(Boolean(""))
// console.log(Boolean(0))

// 숫자형
// parseInt() - 정수
// parseFloat() - 실수
// 실수 -> 정수
// 소수점을 버린다.
// console.log(parseInt(1.7))
// console.log(parseInt("10.7"))

// 정수 -> 실수
// 문자열 값중에 실수로 바꿀 수 있는 값만 실수로 바꾼다.
// console.log(parseFloat(10))
// console.log(parseFloat("10.7"))