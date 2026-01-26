// 회사원1
// 이름: 홍길동
// 나이: 20
// 직책: 사원
const user1 = {
  userName: '홍길동',
  age: 20,
  grade: '사원'
}

// 회사원2
// 이름: 이순신
// 나이: 30
// 직책: 대리
const user2 = {
  userName: '이순신',
  age: 30,
  grade: '대리'
}

// 회사원3
// 이름: 장보고
// 나이: 25
// 직책: 사원
const user3 = {
  userName: '장보고',
  age: 25,
  grade: '사원'
}


// 회사원 3명을 모두 객체로 선언 후
// 사원들의 정보가 몇 명이라도 직책이 사원인 회사원의 이름만 출력해주는 함수
// ex) myFunc(user1, user2, user3, ...)
// 사원의 정보는 여러명 일 수 있음
// 배열은 원소의 자료형에 구애받지 않을 수 있음 (원소가객체인리스트 등)
const selectUser = (callback, ...users) => {
  // 회사원 비교
  for(let i = 0; i < users.length; i++){
    let singleUser = users[i]
    let userGrade = singleUser.grade;
    let userName = singleUser.userName;
    // console.log(`해당 사원 직책: ${users[i].grade}`)
    userGrade === '사원' && callback(`${userName}: ${userGrade}`);
  }
}

// 출력결과
selectUser(console.log, user1, user2, user3);

// 홍길동
// 장보고