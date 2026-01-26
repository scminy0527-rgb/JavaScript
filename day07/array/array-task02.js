// 1. 10 ~ 1까지 Array에 담은 후 짝수만 출력하기
const arr1 = new Array(10).fill(0);
arr1.forEach((data, i, arr) => {
  arr[i] = 10 - i;
  if ((10 - i) % 2 === 0) {
    console.log(10 - i);
  }
});

console.log(arr1);

// 2. 한글을 숫자로
// ex) "일이삼사" -> "1234"
const korNumList = ["일", "이", "삼", "사", "오", "육", "칠", "팔", "구", "영"];
const beforeKor = "일이삼사";
const korToNumResult = beforeKor
  .split("")
  .map((data, i, arr) => korNumList.indexOf(data) + 1)
  .join("");

console.log(korToNumResult);

// 3. 숫자를 한글로
// ex) "1234" -> "일이삼사"
const beforeNum = "1245";
const numToKorResult = beforeNum
  .split("")
  .map((data, i, arr) => korNumList[data - 1])
  .join("");
console.log(numToKorResult);

// 1~100까지 합을 출력
const numList = new Array(100).fill(0);
numList.forEach((data, i, arr) => {
  arr[i] = i + 1;
});

const sumResult = numList.reduce(
  (accumulate, current, i, arr) => accumulate + current,
);
console.log(sumResult);

// 4. 문자열을 반대로 출력하기
// ex) "apple" -> "elppa"
const originStr = "apple";
const originList = originStr.split("");
let newStr = originList.reverse().join("");

console.log(newStr);

// 5. 전화번호를 파라미터로 받아서 파싱하기
const parsingPhoneNum = (phoneNum) => {
  // 일단 xxx-xxxx-xxxx 형태가 맞는지 정도는 확인
  const parsedNum = phoneNum.split("-");
  console.log(parsedNum);

  let isExit = false;

  // 일단 전화번호가 올바르게 쓰여진지 부터 확인 해야함
  if (parsedNum.length !== 3) {
    console.log("전화번호를 올바르게 입력해주세요 ex) 010-1234-5678 ");
    return;
  } else {
    parsedNum.forEach((data, i, arr) => {
      if (i === 0) {
        if (data.length < 2) {
          console.log("잘못된 전화번호, 국번을 입력하세요");
          isExit = true;
        }
      }
      if (i === 1) {
        console.log(data);
        if (data.length < 3) {
          console.log("잘못된 전화번호 양식");
          isExit = true;
        }
        arr[1] = "****";
      }
      if (i === 2) {
        if (data.length < 4) {
          console.log("잘못된 전화번호 양식");
          isExit = true;
        }
      }
    });
  }

  if (isExit) return;
  const resultParse = parsedNum.join("-");
  // console.log(resultParse);
  return resultParse;
};

// ex) 010-1224-1225
// result) 010-****-1225

const result = parsingPhoneNum("010-2217-6040");
console.log(result);
