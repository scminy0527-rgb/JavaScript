// 순서가 있는 자료구조
// 자료구조: 변수에다가 알고리즘을 더한거
// 배열을 자르겠다... 라면?
const arr1 = Array.of(1, 2, 3, 4);
const arr2 = new Array(4).fill(0).map((_, i) => i + 1);

// console.log(arr1);
// console.log(arr2);

// const [one, two, three, four] = arr1;
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);

const user = {
  name: "홍길동",
  age: 20,
  address: "서울시 강남구",
  hobbies: {
    one: "코딩",
    two: "객체지향형 코딩",
    three: "함수지향형 코딩",
  },
};

// 비구조화는 1깊이 (뎁스) 까지만 가능한다.
// 구조분해할당, 비구조할당
const { name, age, adress, hobbies } = user;
const { one, two, three } = hobbies;

// console.log(name);
// console.log(hobbies);
// console.log(three);

// 매개변수의 값도 비구조화 가능
// 유저의 정보를 받으면 유저의 이름을 출력해주는 함수

// 객채를 가져와서 키 토대로 구조분해할당 할거다
// (매우 간편해짐)
const printUserName = ({ name }) => {
  console.log(name);
};

// 유저 정보 받으면 유저의 나이를 출력해주는 함수
const printUserAge = ({ age }) => console.log(age);
// 이때 소괄호 생략 하면 구조분해할당으로 못보고 잘못된 객체로 착각
// 매개변수가 하나라도 소괄호로 감싸기
// printUserAge(user);

// fetch 하면서 구조분해할당 해보기
// https://jsonplaceholder.typicode.com/users
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  // 여기서 유저 값 가져올 때 구조분해할당
  console.log(users);

  // 유저의 이름, 이메일, 핸드폰
  // 그냥 매개변수 에서부터 구조분해할당 사용 할 수도 있음
  users.forEach((user) => {
    const { name, email, phone } = user;
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("phone: ", phone);
  });
};

getUsers();
