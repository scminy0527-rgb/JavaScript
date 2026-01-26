// 학교를 다니고 있는 학생의 총 수 구하기
// 학교(School) 클래스 하나 생성
// 필드(학번, 이름, 나이)

// 3명의 학생 객체화 후 static 필드의 학생 수 출력

class School {
  static studentNumber = 0;
  static {
    console.log("개강이 되었습니다.");
  }

  // 입학과 동시에 학생수는 채워짐
  // 객체의 생성과 동시에 자동 실행
  // 없어도 수행
  constructor(studentId, name, age) {
    this.studentId = studentId;
    this.name = name;
    this.age = age;

    console.log(`${name}님 입학을 환영합니다.`);

    School.studentNumber++;
  }

  showStudentNumber() {
    console.log(School.studentNumber);
  }
}

// 학생 입학
student1 = new School("B611108", "신철민", 30);
student2 = new School("B511117", "이규혁", 25);
student3 = new School("B611097", "강산", 30);

// 학생 출력
console.log(student1);
console.log(student2);
console.log(student3);
// 학생수 출력
// console.log(School.studentNumber);
student3.showStudentNumber();
