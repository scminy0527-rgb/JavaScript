// ?? .?
// 오류가 나지 않게 처리하는 문법
// 이건 마치 flutter 에서 null safety 와 같은거
// 빈 값이 안나오게 하는거

const name = "";
const bookName = name || "동화책";
console.log(bookName);

// ?. optional chaining
const movie1 = {
  name: "아바타3",
  detail: {
    price: 50000,
    date: "2025-12",
  },
};

// 이렇게 오류를 발생 시킬 수 있는 코드는 서버를 죽일 수 있는 코드임
console.log(movie1.detail.title.replace(" ", ""));

// 화면에 값을 출력할 때
// 첫 코드는 오류 발생
console.log(movie1.detail.title);
// 옵셔널 체이닝으로 접근하는 값은 오류가 안남
console.log(movie1.detail?.title);
