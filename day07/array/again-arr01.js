// 배열(array)의 선언
const array1 = [];
const array2 = new Array();
// 칸 수를 알고 있을 때
const array3 = new Array(10);
// 값을 알고 있을 때
const array4 = Array.of("10", 20, 30);

// ==========================================================
// length: 배열의 길이를 확이하는 프로퍼티
const arr1 = [10, 20, 30, 40];
// console.log(arr1.length)
// console.log(arr1[arr1.length - 1])

// string의 메서드
// .split(): **기준이 되는 문자를 전달하면, 문자를 기준으로 잘라 [새로운 배열]로 리턴
const phone = "010-9595-1234";
const phoneArr = phone.split("-");

// .join()
// console.log(phoneArr)
// console.log(phoneArr.join())
// console.log(phoneArr.join(""))
// console.log(phoneArr.join("*"))

// 전화번호 파싱
// "010-9595-1234" -> "010-****-1234"
// console.log(phoneArr)
// const temp = phoneArr[1]
// phoneArr[1] = "****"
// console.log(phoneArr.join("-"))

// "010-9595-1234" -> "95951234"
phoneArr[0] = "";
// console.log(phoneArr.join(""))

// string의 메서드
// .replace(찾을 값, 대체할 값):
// console.log("홍홍홍길동".replace("홍", "김"))
// console.log("홍홍홍길동".replaceAll("홍", "김"))
// let name = "홍길동"
// name[0] = "김"
// console.log(name)

// .push()
// 기존의 배열에 값을 맨 뒤에 추가하는 메서드
const arr2 = ["김길동", "홍길동", "장길동"];
let newLength = arr2.push("박길동");

// .concat()
// **두 개 또는 더 많은 배열을 연결하여 [새로운 배열]로 반환
const arr3 = [30, 40];
const arr4 = [50, 60, 70, 80];
const arr5 = arr3.concat([10], [10], [10], [10], 10);
// console.log(arr5)

// .pop()
// 마지막 요소를 제거
const arr6 = [1, 2, 3, 4, 5, 6];
const last = arr6.pop();

// 실습
const arrTask1 = [10, 20, 30, 40, 50, 60, 70, 80];
// arrTask1를 이용하여 987654321 만들기
// 단, 인덱스를 활용할 수 없다.
arrTask1.push(90);
// let result = ""
// for(let i = 0; i < arrTask1.length; i++){
//   result += String(arrTask1[arrTask1.length - 1 - i]).replace("0", "")
// }
// console.log(result)

// let result = ""
// for(let i = 0; i < 9; i++){
//   result += String(arrTask1.pop()).replace("0", "")
// }
// console.log(result)

// .unshift()
// 배열의 맨 앞에 요소를 추가하는 메서드
const arr7 = [50, 60, 70, 80, 90];
let newLength2 = arr7.unshift(100);
// console.log(arr7)
// console.log(newLength2)

// .shift()
// 배열의 맨 앞의 요소를 삭제하는 메서드
const removedEl = arr7.shift();
// console.log(arr7)
// console.log(removedEl)

// .slice(startIndex, endIndex)
// **start부터 end 직전까지 복사해서 [새로운 배열]로 반환한다.

const arr8 = Array.of(10, 20, 30, 40, 50, 60, 70);
// console.log(arr8.slice(2))
// end의 인덱스를 포함하지 않는다.
// ex) 5 -> 4
// console.log(arr8.slice(2, 4))
// console.log(arr8)
// 마지막 2개부터 끝까지
// console.log(arr8.slice(-2))

// .splice(startIndex, deleteCount, ...insertValue): 원본 배열을 수정하고, 자른 값을 돌려주는 메서드
const arr9 = [10, 20, 30, 40, 50, 60];
// const arr10 = arr9.splice(1, 2)
// console.log(arr9)
// console.log(arr10)
// 수정으로 사용
// arr9.splice(3, 1, 400, 500, [10], [20])

arr9.splice(3, 1, 400);
// console.log(arr9)

// .sort()
// 배열의 값을 정렬해주는 메서드
const arr10 = [100, 150, 15, 250, 600, 700, 80, 25];
// 오름차순
arr10.sort((a, b) => a - b);
arr10.sort((a, b) => {
  return a - b;
});
// 내림차순
// arr10.sort((a, b) => b - a)
// console.log(arr10)

// .reverse()
// 배열의 값을 뒤집어주는 메서드
// console.log(arr10.reverse())
// console.log(arr10)

// .includes(value)
// 문자열, 배열의 메서드
const arr11 = [10, 20, 30, 10, 20, 30];
console.log(arr11.includes(10));

// .indexOf()
// 문자열, 배열의 메서드
console.log(arr11.indexOf(20));
console.log(arr11.lastIndexOf(20));
