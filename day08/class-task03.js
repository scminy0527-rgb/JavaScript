// 학생의 클래스를 만들고
// 수학, 국어, 영어 점수를 입력 받아 학생의 총점과 평균을 출력하시오.

// class Student {
//   constructor(name, id, math, korean, english) {
//     this.name = name;
//     this.id = id;
//     this.math = math;
//     this.korean = korean;
//     this.english = english;
//   }

//   printTotalAndAverage() {
//     const totalScore = this.math + this.korean + this.english;
//     const averageScore = totalScore / 3;

//     const msg = `${this.name}님의 총점: ${totalScore}점, 평균점수: ${averageScore}`;
//     console.log(msg);
//   }
// }

class Student {
  // 초기 점수 및 전체 학생수
  static gradeTotalMath = 0;
  static gradeTotalKorean = 0;
  static gradeTotalEnglish = 0;
  static studentCount = 0;

  // 생성자 (생성 하면서 프로퍼티 할당 및 정적 변수 수정)
  constructor(name, id, math, korean, english) {
    this.name = name;
    this.id = id;
    Student.studentCount++;
    this.math = math;
    Student.gradeTotalMath += math;
    this.korean = korean;
    Student.gradeTotalKorean += korean;
    this.english = english;
    Student.gradeTotalEnglish += english;

    // 또는 그냥 생성자 에서 변수 하는 김에 총점 이랑 평균 프로퍼티도 같이 만들어도 됨
  }

  // 해당 학생의 평균을 나타내주기
  printTotalAndAverage() {
    const totalScore = this.math + this.korean + this.english;
    const averageScore = (totalScore / 3).toFixed(2);

    const msg = `${this.name}님의 총점: ${totalScore}점, 평균점수: ${averageScore}`;
    console.log(msg);
  }

  // 해당 학년의 평균을 나타내주기
  printStudentTotalScore() {
    // 수학 학년평균
    const totalMathAverage = Student.gradeTotalMath / Student.studentCount;
    // 국어 학년평균
    const totalKoreanAverage = Student.gradeTotalKorean / Student.studentCount;
    // 영어 학년평균
    const totalEnglishAverage =
      Student.gradeTotalEnglish / Student.studentCount;

    // 학년 전체 평균
    const totalAverage =
      (totalMathAverage + totalKoreanAverage + totalEnglishAverage) / 3;

    const msg = `학년 평균 국어: ${totalKoreanAverage}점, 수학: ${totalMathAverage}점, 영어: ${totalEnglishAverage}, 학년 전체 평균: ${totalAverage}점`;
    console.log(msg);
  }
}

const student1 = new Student("이규혁", "C011234", 50, 60, 75);
const student2 = new Student("신철민", "B611108", 90, 90, 100);
student1.printTotalAndAverage();
student2.printTotalAndAverage();
student1.printStudentTotalScore();
