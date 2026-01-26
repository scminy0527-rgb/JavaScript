// 학교를 다니고 있는 학생의 총 수 구하기
// 학교(School) 클래스 하나 생성
// 필드(학번, 이름, 나이)

// 3명의 학생 객체화 후 static 필드의 학생 수 출력
class School {
  static count = 0;

  // static block
  // 클래스가 객체화가 될 때 딱 1번만 실행
  static {
    console.log("학교가 개강되었습니다.");
  }

  constructor(id, name, age) {
    School.count++;
    this.id = id;
    this.name = name;
    this.age = age;
  }

  getCountOfStudent() {
    console.log(`현재 학생 수: ${School.count}`);
  }
}

const hong = new School(1, "홍길동", 20);
const jang = new School(2, "장보고", 25);
const lee = new School(3, "이순신", 30);
const kim = new School(4, "김철수", 40);

kim.getCountOfStudent();
