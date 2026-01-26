const aniaml1 = {
  cat: "야옹이",
  dog: "누렁이",
  cow: "얼룩이",
  tiger: "어흥이",
};

// 깊은 복사
// 그런데 cat 만 쓰고싶을 때
// const aniaml2 = {
//   ...aniaml1,
// };

// const { cat } = aniaml2;

// const animal2 = { cat, ...aniaml1 };

// console.log(animal2);
// console.log(cat);

const user = {
  email: "test123@gmail.com",
  password: "test123!@#",
  name: "홍길동",
  address: "서울시 강남구",
  phone: "010-1234-1234",
};

// 비밀번호 제외 하고 나머지만 보내기
const { password, ...removedPasswordUser } = user;
console.log(removedPasswordUser);
