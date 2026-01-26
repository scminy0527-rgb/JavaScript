// 성과 이름을 더한 값을 출력해주는 함수
function printFullName(lastName, firstName, callback){
  callback(lastName + firstName);
}

// function print(data){
//   console.log(data);
// }

const print = (data) => {
  console.log(data);
}

// 함수 사용
printFullName('신','철민',(request) => {
  console.log(request);
});

printFullName('김', '철수', print)




// 두 정수의 곱셈 결과를 출력
function printGopsemResult(num1, num2, callback){
  callback(num1 * num2);
}

const resultPrint = (result) => {
  console.log(result);
}

// 정수의 곱 출력
printGopsemResult(19, 19, resultPrint);



// 두 정수를 받아서 큰 값의 결과를 출력해주는 함수 로직
function compareNumber (num1, num2, callback){
  let result = num1 > num2 ? num1 : num2 
  callback(result);
}

compareNumber(8, 22, print);