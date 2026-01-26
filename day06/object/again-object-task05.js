// 문자열 메서드
// 문자열에서 문자를 찾아서 포함되어 있다면 true, 아니라면 false를 반환
// "문자열".includes("문자")

function User(name, age, address, phone){
  this.name = name;
  this.age = age;
  this.address = address;
  this.phone = phone;
}

const getUsers = (...users) => users

const user1 = new User("홍길동", 20, "경기도 하남", "010-2467-8663")
const user2 = new User("장보고", 30, "경기도 안산", "010-7856-1547")
const user3 = new User("이순신", 45, "서울시 종로", "010-1762-4872")
const user4 = new User("김철수", 25, "서울시 강남", "010-7521-4874")
const user5 = new User("김영희", 35, "경기도 오산", "010-8784-1875")

const users = getUsers(user1, user2, user3, user4, user5)
// console.log(users)


// 1. 경기도에 거주하는 사람의 이름을 출력하기
// for(let user of users){
//   if(user.address.includes("경기도")){
//     console.log(user)
//   }
// }
// 2. 30대 유저만 출력하기
// for(let user of users){
//   if(user.age >= 30 && user.age <= 39){
//     console.log(user)
//   }
// }

// 3. 모든 유저의 정보 출력하기
// 출력 결과
// ex) 이름은 김영희, 나이는 35살, 만나이 34살, 사는 곳 경기도 오산
// ...
// for(let user of users){
//   console.log(`이름은 ${user.name}, 나이는 ${user.age}, 사는 곳: ${user.address}`)
// }


