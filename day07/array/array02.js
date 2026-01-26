// 배열의 고차 함수 매서드
// 매개변수에 콜백 함수가 들어가기에

// .forEach()
const arr1 = new Array();
for (let i = 0; i < 10; i++) {
  arr1.push((i + 1) * 10);
}

// console.log(arr1);

// void 반환
// 기능이나 비즈니스 로직을 수행해주는거지 값은 아님 !!!
arr1.forEach((data, i, arr) => {
  // 스코프 내부에서 원본 배열에 접근 가능함
  arr[i] = data + 100;
});
// console.log(arr1);

// .map()
// ** 값을 순차적으로 접근하여 callback 함수의 리턴 값들을 모아 [새로운 배열]로 반환
// 값을 수정하기 위해 사용하는 매서드
// 매서드 체이닝
const arr2 = new Array(10)
  .fill(0)
  .map((_, i, arr) => (i + 1) * 10)
  // i 랑 arr 필요 없다면 생략해도 됨
  .map((data, i, arr) => data + 100);
// 여기서 맨 마지막 매서드의 반환 타입을 봐야 함
// forEach 가 항상 마지막에 있어야함
// console.log(arr2);

// .filter()
// 걸러내는거
// ** 콜백함수의 리턴 중 조건식에 만족하는 값 들을 모아서 [새로운 배열]로 리턴
const arr3 = new Array(10).fill(0).map((_, i) => i + 1);
// console.log(arr3);

// 즉 여기서 조건이 만족 할 때 data 가 반환되는거임 (조건식에 있는게 반환 되는게 아니라 data 가 반환됨)
const arr4 = arr3.filter((data, i, arr) => i % 2 == 0);
// console.log(arr4);

const str2 = "abcdefghijk";
// 결과 abcdef

// g 부터 출력 안되게 해야함
const indexG = str2.indexOf("g");
const result = str2
  .split("")
  .filter((data, i, arr) => i < indexG)
  .join("");

// console.log(result);

// a의 개수구하기
// "abaacadeaqdtrascaqqaqadrtasqa"
const str3 = "abaacadeaqdtrascaqqaqadrtasqa";

let count = 0;
const str3Result = str3.split("").filter((data, i, arr) => {
  return data === "a";
}).length;

// str3Result.forEach((data, i, arr) => {
//   count++;
// });

// console.log(str3Result);

// .some()
// 배열 안에 조건식을 만족 하는 원소가 있다면 true, 없다면 false

// .find()
// 찾다
// 배열 안에 조건식을 만족하는 첫 번째 값을 반환
// ex) 아이디 비밀번호 일치 하는 회원 정보 딱 하나
arr3.find((data) => data > 5);
// filter 와 find 의 차이점

// .reduce()
// 누적합 구할 때 사용
// 모든 데이터 관련 해서 통계 낼 때 유리
// accumulate 값이 리턴됨
const arr14 = Array.of(10, 20, 30, 40, 50);

const result14 = arr14.reduce(
  (accumulate, current, i, arr) => accumulate + current,
);
console.log(result14);

const data = [
  { name: "야옹이", age: 10 },
  { name: "멍멍이", age: 15 },
  { name: "얼룩이", age: 12 },
  { name: "초롱이", age: 5 },
];

const dataResult = data.reduce((acc, curr) => {
  if (curr.age >= 15) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(dataResult);

// .from()
// 유사배열객체
// 유사배열객체만 사용 가능
const obj = {
  0: "1번값",
  1: "2번 값",
  length: 2,
};

const obj2 = {
  name: "1번값",
  age: "2번 값",
};

const arr12 = Array.from(obj);
const arr13 = Array.from(obj2);

// console.log(arr12);
// console.log(arr13);
