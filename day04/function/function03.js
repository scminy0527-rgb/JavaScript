// 5개 => 매개변수 5개
// 100개 => 매개변수 100개

// 가변 매개변수 (rest parameter)
const myFunc = (...numbers) => {
  console.log(numbers[4]);
}

myFunc(10 ,20 ,1, 5, 9);