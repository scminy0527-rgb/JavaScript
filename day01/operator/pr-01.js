// 나이는 상수로 설정, 삼항 연산자
// ** 중요 ** 값을 모두 변수에 담아보기 

// 실습 나이가 19살 이상이면 "입장 가능" 출력
// 19살 미만이면 "입장 불가" 출력

// 나이가 짝수면 "짝수" 출력
// 나이가 홀수면 "홀수" 출력 

// 나이가 16살이면 "당첨" 출력. 
// 아니면 "꽝입니다" 출력   

// 콘솔 결과: [본인이름]님은 [입장 가능]
// [나이], [홀수], [꽝입니다].  

const age = 18;
const name = "김세환"
const baseAge = 19 
const luckyAge = 16
const pass = "입장가능"
const notPass = "입장불가"
const isAdult = age >= baseAge
const passResult = isAdult ? pass : notPass
const odd = "홀수"
const even = "짝수"
const lucky = "당첨"
const unLucky = "꽝"
const isEven = age % 2 === 0
const isLukcy = age === luckyAge
const evenResult = isEven ? even : odd
const luckyResult = isLukcy ? lucky : unLucky
const result = "[" + name + "]님은 [" + passResult + "]\n[" + age + "], [" + evenResult + "], [" + luckyResult + "]"
`[${result}]`
// ES6 템플릿 리터럴
// 문자열 내부에서 변수를 사용할 수 있는 문법

console.log(result)
