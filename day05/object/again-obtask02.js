// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.
function User(name, age, point){
  this.name = name
  this.age = age
  this.point = point
  this.printName = () => {
    console.log(this.name)
  }
}

function Market(){
}

const user1 =  new User("홍길동", 30, 3500)
const user2 =  new User("이순신", 22, 0)
const user3 =  new User("장보고", 66, 9500)
// 3명을 모두 마트에 등록 시킨다.
const market = new Market()
market.user1 = user1
market.user2 = user2
market.user3 = user3

// console.log(market)
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.
for(let key in market){
  // 유저의 이름만 모두 출력한다.
  // console.log(market[key].name)
  // 유저의 포인트를 모두 출력한다.
  // console.log(market[key].point)
  // 모든 유저는 자신의 이름을 출력할 수 있는 printName 메서드를 가지고 있다.
  // market[key].printName()
}

// 빠른 for문
// for ~ in
// 배열 - 순서가 있는 자료구조
// 값을 하나만 저장
const test1 = [10, 20, 30, 40, 50]

// 객체 - 순서가 없는 자료구조
// 값을 한 쌍씩 저장 
const test2 = {
  name: "홍길동",
  age: 20,
  address: "경기도 구리시"
}

// for ~ in문
for(let data in test1){
  // index 접근
  // console.log(data)
}

// for ~ of문
// 개수만큼 반복
for(let data of test1){
  // 값
  // console.log(data)
}

// 객체(object) {}의 빠른 for문
for(let key in test2){
  // key
  // console.log(key)
  // console.log(test2.key) X
  console.log(test2[key])
}

// object is not iterable error
// for(let data of test2){
  // console.log(data)
// }

// 배열의 빠른 for ~ of
const test3 = [10, 20, 30, 40, 50]
// .entries(): 배열의 메서드

for(let data of test3.entries()){
  const i = data[0]
  const value = data[1]
  console.log(data)
  if(value === 40){
    // 40의 인덱스 몇 번이냐~
    console.log(i)
  }
}