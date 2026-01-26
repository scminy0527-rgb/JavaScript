// 1~10까지
// 20~30까지
// 50~60까지
// 각각 들어가있는 배열을 만들고,
// 3개의 배열을 스프레드 문법으로 합치기

const arr1 = new Array(10).fill(1).map((_, i) => i + 1);
const arr2 = new Array(11).fill(1).map((_, i) => 20 + i);
const arr3 = new Array(11).fill(1).map((_, i) => 50 + i);

console.log(arr1);
console.log(arr2);
console.log(arr3);

const arrTotal = [...arr1, ...arr2, ...arr3];
console.log(arrTotal);
