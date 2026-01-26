// 배열의 고차함수(메서드)
// 매개변수에 callback함수
// .forEach((값, 인덱스, 배열) => {}), 값X
// 값을 순차적으로 접근하여 반복하는 메서드
const arr1 = new Array(10).fill(0);
arr1.forEach((data, i, arr) => {
  arr[i] = (i + 1) * 10;
});

// for(let i = 0; i < 10; i++){
//   arr1.push((i + 1) * 10)
// }

// for(let entry of arr1.entries()){
//   const index = entry[0]
//   const value = entry[1] + 100
//   arr1[index] = value
// }
// console.log(arr1)

arr1.forEach((data, i, arr) => {
  arr[i] = data + 100;
});

// .map()
// **값을 순차적으로 접근하여 callback함수의 리턴 값들을 모아 [새로운 배열]로 반환
// 값을 수정하기 위해 사용하는 메서드
// 메서드 체이닝
// new Array(10) // []
//   .fill(0) // [0, 0, 0, ..]
//   .map((_, i) => (i + 1) * 10) // []
//   .map((data) => data + 100) // []
//   .map((data, i, arr) => data / 4) // []
//   .forEach((data) => console.log(data)) // void
// forEach가 항상 마지막

// .filter()
// **콜백함수의 리턴 중 조건식에 만족하는 값들을 모아서 [새로운 배열]로 리턴
const arr3 = new Array(10).fill(0).map((_, i) => i + 1);
// console.log(arr3)
const arr4 = arr3.filter((data, i, arr) => i % 2 === 0);
// console.log(arr4)

// .some()
// 배열안에 조건식을 만족하는 값이 있다면 true, 없다면 false
console.log(arr3.some((data) => data === 10));

// .find()
// 배열안에 조건식을 만족하는 첫 번째 값을 반환
arr3.find((data) => data === 5);

// .from()
// 유사 배열객체를 배열로 형변환 시켜서 [새로운 배열]로 반환
const obj = {
  0: "1번값",
  1: "2번값",
  length: 2,
};

const obj1 = {
  name: "1번값",
  age: "2번값",
};

const arr12 = Array.from(obj);
const arr13 = Array.from(obj1);
console.log(arr12);
console.log(arr13);

// .reduce()
// 누적값, 현재요소, 인덱스, 배열의 매개변수를 받아 누적값을 구해서 반환하는 메서드
// accumulate 값이 리턴된다.
const arr14 = Array.of(10, 20, 30, 40, 50);
const result = arr14.reduce(
  (accumulate, current, i, arr) => accumulate + current,
);
console.log(result);

const datas = [
  { name: "야옹이", age: 20 },
  { name: "누렁이", age: 10 },
  { name: "얼룩이", age: 5 },
  { name: "점박이", age: 15 },
];

// 추천 X
const arr15 = datas.reduce((acc, curr) => {
  if (curr.age >= 15) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(arr15);
