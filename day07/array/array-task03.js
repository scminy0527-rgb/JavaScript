// 1. 1~10까지 누적합 구하기
const arr1 = new Array(10).fill(0);

// 연달아 쓸 때는 map 이 유리
arr1.forEach((data, i, arr) => {
  arr[i] = i + 1;
});
const result1 = arr1.reduce((acc, cur) => acc + cur);

// 결과 출력
console.log("1번 결과");
// console.log(arr1);
console.log(result1);

// 2. 1~50까지 짝수만 배열에 담고 배열안에 값에 3을 곱한값으로 변경 후 출력
const arr2 = new Array(50).fill(0);
arr2.forEach((data, i, arr) => {
  arr[i] = i + 1;
});

// 짝수만 담긴 리스트
const arr2Even = arr2.filter((data) => data % 2 === 0);

// 배열 안에 값 3 곱하기
arr2Even.forEach((data, i, arr) => {
  arr[i] = data * 3;
});
console.log("2번 결과");
console.log(arr2Even);

// 3. 초기값으로 10, 20, 30, 40, 50 값을 넣고 내림차순 정렬하기
const arr3 = new Array(5).fill(0);
arr3.forEach((data, i, arr) => {
  arr[i] = (i + 1) * 10;
});
arr3.sort((a, b) => b - a);
console.log("3번 결과");
console.log(arr3);

// 4. 1~10까지 배열에 담고 5보다 크다면 값을 2배로 변경 후 출력하기
const arr4 = new Array(10).fill(0);
arr4.forEach((data, i, arr) => {
  let num = i + 1;
  if (num > 5) {
    arr[i] = num * 2;
  } else {
    arr[i] = num;
  }
});

console.log("4번 결과");
console.log(arr4);

// 5. 1~30까지 배열에 담고 홀수 값들만 "*" 붙여서 출력하기
// ex) const arrTask1 = 1*3*5*7*9*11*13...
const arr5 = new Array(30).fill(0);
let oddNumStr = [];
arr5.forEach((data, i, arr) => {
  let num = i + 1;
  arr[i] = num;
  // 그와 동시에 홀수 문자열 만들기
  if (num % 2) {
    oddNumStr.push(num);
  }
});

const arrTask1 = oddNumStr.join("*");
console.log("5번 결과");
// console.log(arr5);
console.log(arrTask1);

// 6. arrTask1에 들어간 *을 제거하고 배열에 담아 기존에 값을 2배로 변경 후 모두 출력하기
const arrTask2 = arrTask1.split("*");
arrTask2.forEach((data, i, arr) => {
  arr[i] = data * 2;
});

console.log("6번 결과");
console.log(arrTask2);

// 7. 1~20까지 배열에 담고 배열의 든어간 값 중 뒤에서 5개 값만 더해서 출력하기
const arr7 = new Array(20).fill(0);
arr7.forEach((data, i, arr) => {
  arr[i] = i + 1;
});

// 새로운 뒤에 배열
// slice: 새로운 배열을 리턴
const newArr7 = arr7.slice(-5);
const sumResult = newArr7.reduce((acc, cur, i, arr) => acc + cur);

console.log("7번 결과");
console.log(arr7);
console.log(newArr7);
console.log(sumResult);

// 8. 들어간 글자 갯수 맞추기
// ex) "abcdrweasdad", "a"
// "a" -> 3개

const str8 = "abcdrweasdad";

console.log("마지막 1번 방법");
const strList = str8.split("a").length - 1;
console.log(strList);

// sort 를 그냥 쓰는거도 가능
// const str2List = str8.split("").sort((a, b) => (a < b ? a : b));
// console.log(str2List);
// console.log(1 - "a");

// replaceAll 이용 해서 찾을 문자 빈 걸로 바꾸면 그걸로 길이 비교도 가능
