const file = require("fs");

// json 읽어오기 JSON 파일 읽어오기
file.readFile("./user.json", "utf-8", (error, data) => {
  // console.log(data);
  // JSON -> JS
  const users = JSON.parse(data);
  // console.log(users);
});

const usersJSON = file.readFileSync("./user.json", "utf-8");
const users = JSON.parse(usersJSON);
// console.log(users);

// users 데이터에서 이름만 출력하기
users.forEach((element) => {
  const name = element.name;
  // console.log(`name: ${name}`);
});

// json 파일 생성 하는 방법
const user = {
  name: "홍길동",
  age: 20,
  phone: "010-1234-5678",
  address: "경기도 구리시",
  email: "test123@gmail.com",
};

const userJSON = JSON.stringify(user);
console.log(userJSON);

file.writeFile("./user2.json", userJSON, "utf-8", (error) => {
  if (error) {
    console.error(error);
  }
});
