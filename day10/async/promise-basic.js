// 비동기에 대한 요청으로 언젠가 다 됬을 때 받기 위한 리턴 객체
const promise = new Promise((resolve, reject) => {
  check = true;
  if (check) {
    resolve("성공");
  } else {
    reject("실패");
  }
});
let data = "";

console.log(promise);
// .then() 성공한 데이터를 매개변수로 받는 매서드
// .catch(): 실패한 데이터를 매개변수로 받는 매서드
promise
  .then((result) => {
    console.log("then 매서드 실행", result);
    // 동기 비동기
    // 동기에 비동기 들어갈 수 있는지
    data = result;
  })
  .catch((err) => {
    console.log("catch 매서드 실행", err);
  });

console.log("결과", data);
