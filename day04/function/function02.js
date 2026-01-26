// 디폴트 파라미터 (default parameter)
function add(num1, num2 = 0, num3 = 0){
  return num1 + num2 + num3
}

// 함수의 응용
let result = add(20, 30, 40) + 20;
console.log(add(20));

// 익명 함수
// function(){}

// 즉시실행함수
// ()()

// 화살표 함수
// this 바인딩에서 차이
// () => {}
// 화살표 함수는 무조건 const
const printName = (userName) => {
  console.log(userName);
};