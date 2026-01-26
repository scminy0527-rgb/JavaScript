// .forEach 를 이용해서
// 배열에 1~10까지 값을 넣고 짝수만 콘솔에 출력하기
const arr1 = Array(10).fill(0);

// forEach 는 for 문이 아니여서 continue break 키워드를 못쓰니 주의!!
arr1.forEach((_, i, arr) => {
  let value = i + 1;
  arr[i] = value;
  // 짝수만 출력
  if (value % 2 == 0) {
    console.log(value);
  }
});

console.log(arr1);

// array map 을 이용해서 문자열을 12345678 로 만들기
const phone = "010-1234-5678";

// const phoneArr = phone.split("-").map((data) => (data !== "010" ? data : ""));
// const newPhone = phoneArr.join("");

// console.log(newPhone);

const result = phone
  .replace("010", "") // 스트링
  .replaceAll("-", "")
  .split("") // 배열
  .map((data) => data) // array
  .join(""); // string

console.log(result);
