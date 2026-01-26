// 객체의 선언
const user1 = new Object();
const user2 = {}

console.log(user1);
console.log(user2);

const user3 = {
  name: '유진',
  age: 27,
  color: '노랑'
}

// 대괄호 접근법
// 객체["key값"]
// 변수를 키 로 써 사용해서 불러오기 가능
console.log(user3['age']);

// 닷 접근법
// .(주소에 접근하는 연산자)
console.log(user3.age)

// user3 이름을 본인 이름으로 변경
// 키 가 있으면 수정
// 키 가 없으면 추가
user3.name = '철민'
console.log(user3);