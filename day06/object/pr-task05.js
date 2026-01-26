// 문자열 메서드
// 문자열에서 문자를 찾아서 포함되어 있다면 true, 아니라면 false를 반환
// "문자열".includes("문자")

function User(name, age, location, phoneNum) {
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
const user1 = new User("홍길동", 20, "경기도 하남", "010-7856-1547");

// 이름: "장보고"
// 나이: 30
// 지역: "경기도 안산"
// 전화번호: "010-2467-8663"
const user2 = new User("장보고", 30, "경기도 안산", "010-2467-8663");

// 이름: "이순신"
// 나이: 45
// 지역: "서울시 종로"
// 전화번호: "010-1762-4872"
const user3 = new User("이순신", 45, "서울시 종로", "010-1762-4872");

// 이름: "김철수"
// 나이: 25
// 지역: "서울시 강남"
// 전화번호: "010-7521-4874"
const user4 = new User("김철수", 25, "서울시 강남", "010-7521-4874");

// 이름: "김영희"
// 나이: 35
// 지역: "경기도 오산"
// 전화번호: "010-8784-1875"
const user5 = new User("김영희", 35, "경기도 오산", "010-8784-1875");

// 1. users 프로토타입
// ex)
// function Users(...user){}
// ex)
// users.user1 = user1
// users.user2 = user2
function Users() {
  this.userList = new Object();
  // 유저 목록들을 담는 객체에 유저 원소를 추가하는 매서드
  this.createUser = (...users) => {
    for (let userData of users.entries()) {
      let id = "user" + userData[0];
      this.userList[id] = userData[1];
    }
  };

  // 경기도 거주민 출력해주는 매쏘드
  this.printGyeonggiPeople = (callback) => {
    for (let userIndex in this.userList) {
      let user = this.userList[userIndex];

      if (user.location.includes("경기")) {
        callback(user);
      }
    }
  };

  // 30대 출력해주는 함수
  this.print30AgePeople = (callback) => {
    console.log("30대 인원 출력");
    for (let userIndex in this.userList) {
      let user = this.userList[userIndex];
      let userAge = user.age;

      if (userAge >= 30 && userAge < 40) {
        callback(user);
      }
    }
  };

  // 모든 유저 정보 출력하는 함수
  this.printAllUsers = (callback) => {
    console.log("전체 유저 정보 출력");
    for (let userIndex in this.userList) {
      let user = this.userList[userIndex];
      callback(user);
    }
  };
}

// 3. 함수로 처리
// 결과를 처리해주는 콜백함수 정의하기 (요기나게 쓰임)
const printResult = (user) => {
  let name = user.name;
  let age = user.age;
  let location = user.location;

  let message = `이름은 ${name}, 나이는 ${age}살, 만나이 ${age - 1}살, 사는 곳 ${location} `;
  console.log(message);
};

// 객체 일단 생성
const users = new Users();
users.createUser(user1, user2, user3, user4, user5);
console.log(users);

// 경기도 거주하는 사람 이름 출력해주는 함수 정의
users.printGyeonggiPeople(printResult);

// 30대 이름 출력해주는 함수 정의
users.print30AgePeople(printResult);

// 3. 모든 유저의 정보 출력하기
users.printAllUsers(printResult);

// 출력 결과
// ex) 이름은 김영희, 나이는 35살, 만나이 34살, 사는 곳 경기도 오산
// ...
