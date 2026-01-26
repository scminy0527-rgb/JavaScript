// node array01

// 배열의 선언
const array1 = [];

// 프로토타입 으로 선언 (앞 글자 대문자면 무조건 프로토타입)
// 칸 수를 모를 때 선언하는 방식
const array2 = new Array();

// 칸 수를 알고 있을 때 선언하는 방식
const array3 = new Array(10);

// new 안붙인 이유: static 개념 (이미 할당되어진...) 따라서 new 안붙어도 됨
// new 안붙이고 써야 함
const array4 = Array.of("10", 20, 30);

// ============================================
// length 배열의 길이를 확인하는 프로퍼티
const arr1 = [10, 20, 30, 40];
console.log(arr1.length);

// .split()
// string 의 매서드 (반환값이 리스트 형태 이기에)
const phone = "010-9595-1234";
let phoneArr = phone.split("-");
let phoneArr2 = phone.split("-");
console.log(phoneArr);

// .join()
// 배열 값들이 만나는거

// 전화번호 파싱
// 010-9595-1234 -> 010-****-1234

// 전화번호 파싱
// 항상 값을 바꿀 때는 백업을 해놔야 함
const temp = phoneArr[1];
phoneArr[1] = "****";
console.log(phoneArr);

const result = phoneArr.join("-");
console.log(result);

// "010-9595-1234" -> 95951234
// 아니면 앞에 split 한거에서 010 을 빈 문자로 놔둬도 됨
let newPhoneArr = [phoneArr2[1], phoneArr2[2]];
// console.log(newPhoneArr);
const secondResult = newPhoneArr.join("");
console.log(secondResult);

// string 의 매소드
// .replace(찾을 값, 대체할 값) 치환, 대체
// 가장 첫 값을 찾아서 해당 값만 바꿈
// console.log("홍홍홍길동".replaceAll("홍", "김"));

// 문자열이 리스트 처럼 인덱스 번호를 해서 수정 안되는 이유
// 원시타입 이여서 인덱스 이용해서 이름 바꾸는건 불가능
// 원시타입: 배열 객체 제외한 일반적인 모든 요소
let name = "홍길동";
name[0] = "김";
// console.log(name);

// .push()
// 기존 배열에 값을 추가해주는 매서드 (뒤에 추가됨)
const arr2 = ["김길동", "홍길동", "정길동"];

// 새로운 원소를 배열의 마지막에 추가 해주고 새로운 길이를 반환해줌
let number = arr2.push("박길동");
// console.log(arr2);
// console.log(number);

// .concat()
// ** 2개 또는 더 많은 배열을 연결하여 [새로운 배열]로 반환 (return)
const arr3 = [30, 40];
const arr4 = [50, 60, 70, 80];
const arr5 = arr3.concat(arr4);
// console.log(arr5);
// console.log(arr3);
// console.log(arr4);

// .pop()
// 마지막 요소를 제거하는 메서드
const arr6 = [1, 2, 3, 4, 5, 6];
const last = arr6.pop();
// console.log(last);
// console.log(arr6);

// 실습
const arrTask1 = [10, 20, 30, 40, 50, 60, 70, 80];
// arrTask1을 이용하여 987654321 만들기
// 단 인덱스를 활용할 수 없다.

// 문자열 담을 곳
let strResult = "";

// 일단 맨 마지막에 90추가
arrTask1.push(90);
// const len = arrTask1.length;
// console.log(arrTask1.length);

// for 문
// for (let i = 0; i < len; i++) {
//   console.log("테스트");
//   let popResult = arrTask1.pop();
//   console.log(popResult);

//   strResult += popResult / 10;
// }

// while 문
// 길이는 모른다고 가정하기
while (1) {
  let popResult = arrTask1.pop();

  // 언젠가 계속 뒤에 빠지면 리스트 텅 빔 (그때 종료)
  if (popResult === undefined) break;
  strResult += popResult / 10;
}

// 숫자로 사용하고 싶다면 intParse 하기
// console.log(strResult);

// .unshift()
// 배열의 맨 앞에 요소를 추가하는 매서드
const arr7 = [50, 60, 70, 80, 90];
arr7.unshift(100);
const len7 = arr7.length;
// console.log(len7);
// console.log(arr7);

// .shift()
// 배열의 맨 앞에 요소를 삭제하는 리스트 (pop 이랑 비슷)
const removedElement = arr7.shift();
// console.log(removedElement);
// console.log(arr7);

// .slice(startIndex, endIndex)
// ** start 부터 end 직전 까지 복사해서 [새로운 배열]을 반든다.
// 원본 배열의 변화가 없는거
const arr8 = Array.of(10, 20, 30, 40, 50, 60, 70);

// end 의 인덱스는 포함하지 않음
// -1 는 맨 뒤에 첫번째
// console.log(arr8.slice(2));
// console.log(arr8);

// .splice(startIndex, deleteCount, ...insertValue)
// 원본 수정 및 자른 값을 돌려주는 매서드
const arr9 = [10, 20, 30, 40, 50, 60];
// index 부터 몇개를 지울건지
// const result9 = arr9.splice(1, 2);

// 40을 400으로 바꾼 코드
arr9.splice(3, 1, 400);

// console.log(result9);
console.log(arr9);

// .sort() : 정렬
// 유니코드 방식으로 정렬
const arr10 = [100, 150, 15, 250, 600, 700, 10, 25, "a", "d", "z", false, true];

// a-b 에서 a가 양수가 되면 뒤로 보냄
// 중괄호와 리턴 조심
// 값을 정렬해주는 매서드
arr10.sort((a, b) => {
  return a - b;
});
console.log(arr10);

// 배열의 순서, 즉 배열의 값을 뒤집어주는 매서드
console.log(arr10.reverse());

// .includes(value)
// 문자열, 배열 의 매서드

const arr11 = [10, 20, 30];
console.log(arr11.includes(10));

// .indexOf() 앞에서부터 찾기
// .lastIndexOf() 뒤에서부터 찾기
// 문자열, 배열의 매서드
