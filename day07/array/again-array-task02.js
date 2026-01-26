// 1. 10 ~ 1까지 Array에 담은 후 짝수만 출력하기
new Array(10)
  .fill(0)
  .map((data, i) => 10 - i)
  .forEach((data) => console.log(data));

// 2. 한글을 숫자로
// ex) "일이삼사" -> "1234"
const changeNumbers = (input) => {
  const hangles = "공일이삼사오육칠팔구";
  const hangle = input.split("");
  return hangle.map((c) => hangles.indexOf(c)).join("");
};

let result2 = changeNumbers("공공칠칠");
console.log(result2);

// 3. 숫자를 한글로
// ex) "1234" -> "일이삼사"
const changeHangles = (input) => {
  const hangles = "공일이삼사오육칠팔구";
  const hangle = input.split("");
  return hangle.map((c) => hangles.charAt(c)).join("");
};

let result3 = changeHangles("0088");
console.log(result3);

// 4. 1~100까지 합을 출력
const arr1 = new Array(100).fill(0).map((_, i) => i + 1);
const total = arr1.reduce((acc, curr) => acc + curr, 0);
console.log(total);

// 5. 문자열을 반대로 출력하기
// ex) "apple" -> "elppa"
const str1 = "apple".split("").reverse().join("");
console.log(str1);

// 6. 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1224-1225
// result) 010-****-1225
const parsePhone = (phoneNumber) => {
  if (typeof phoneNumber !== "string") {
    phoneNumber = String(phoneNumber);
  }

  if (!phoneNumber.includes("-")) {
    return "양식이 맞지 않습니다.\nex)010-0000-0000";
  }

  const arrPhone = phoneNumber.split("-");
  let temp = arrPhone[1];
  arrPhone[1] = "****";
  return arrPhone.join("-");
};

let result6 = parsePhone("010-0000-1234");
console.log(result6);
