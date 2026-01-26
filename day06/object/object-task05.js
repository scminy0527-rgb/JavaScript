// 문자열 메서드
// 문자열에서 문자를 찾아서 포함되어 있다면 true, 아니라면 false를 반환
// "문자열".includes("문자")

function User(name, age, location, phoneNum){
  this.name = name;
  this.age = age;
  this.location = location;
  this.phoneNum = phoneNum;
}

// 유저1
// 이름: "홍길동"
// 나이: 20
// 지역: "경기도 하남"
// 전화번호: "010-7856-1547"
const user1 = new User('홍길동', 20, '경기도 하남', '010-7856-1547');

// 이름: "장보고"
// 나이: 30
// 지역: "경기도 안산"
// 전화번호: "010-2467-8663"
const user2 = new User('장보고', 30, '경기도 안산', '010-2467-8663');

// 이름: "이순신"
// 나이: 45
// 지역: "서울시 종로"
// 전화번호: "010-1762-4872"
const user3 = new User('이순신', 45, '서울시 종로', '010-1762-4872');

// 이름: "김철수"
// 나이: 25
// 지역: "서울시 강남"
// 전화번호: "010-7521-4874"
const user4 = new User('김철수', 25, '서울시 강남', '010-7521-4874');

// 이름: "김영희"
// 나이: 35
// 지역: "경기도 오산"
// 전화번호: "010-8784-1875"
const user5 = new User('김영희', 35, '경기도 오산', '010-8784-1875');

// 1. users 프로토타입
// ex)
// function Users(...user){}
// ex)
// users.user1 = user1
// users.user2 = user2

// 2. users 배열
const users = [user1, user2, user3, user4, user5];

// 3. 함수로 처리
// const myFunc = (...users) => {}

// 경기도 거주하는 사람 이름 출력해주는 함수 정의
// const printGyeonggiPeople = (userData, callback) => {

//   let standard = '경기'
//   let location = userData.location;

//   if(location.includes(standard)){
//     callback(userData);
//   }
// }
const printGgPeople = (callback,...users) => {
  for(let data of users){
    console.log(data);
    let userData = data;
    let location = userData.location;

    if(location.includes('경기')){
      callback(userData);
    }
  }
}



// 30대 이름 출력해주는 함수 정의
const printAge30People = (userData, callback) => {
  let standard = 30

  if(userData.age >= standard && userData.age < 40){
    callback(userData);
  }
}

// 출력해주는 간단한 콜백함수 만들기
// 결국 매개 변수는 하나 하나 받는거 보다는 객체로 받는게
// 추후 객체에 변수 수정 및 프로퍼티 추가 되더라도 대응 쉬움
const resultPrint = (userData) => {
  let name = userData.name;
  let age = userData.age;
  let realAge = age - 1;
  let location = userData.location;

  let result = `이름은 ${name}, 나이는 ${age}살, 만나이 ${realAge}살, 사는 곳 ${location}`;
  console.log(result);
}


// 실제 테스트 부분.
// 1. 경기도에 거주하는 사람의 이름을 출력하기
console.log('경기도 사는 사람')
// for(let data of users.entries()){
//   // 인덱스 및 값 분리하기
//   let userData = data[1]
//   printGyeonggiPeople(userData, resultPrint);
// }

printGgPeople(resultPrint, user1, user2, user3, user4, user5)


// 2. 30대 유저만 출력하기
console.log('2. 30대 유저만 출력하기');
for(let data of users.entries()){
  // 인덱스 및 값 분리하기
  let userData = data[1]
  printAge30People(userData, resultPrint);
}



// 3. 모든 유저의 정보 출력하기
console.log('3. 모든 유저의 정보 출력하기');
for(let data of users.entries()){
  // 인덱스 및 값 분리하기
  let userData = data[1]
  resultPrint(userData)
}

// 출력 결과
// ex) 이름은 김영희, 나이는 35살, 만나이 34살, 사는 곳 경기도 오산
// ...