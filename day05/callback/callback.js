// 두 정수를 받아서 더한 후 출력
function myfunc(num1, num2, callback){
  callback(num1 + num2)
}

myfunc(10, 20, (result) => {console.log(result)})
