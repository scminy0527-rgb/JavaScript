// 학생 추상화
// 학생 객체화
class Student {
  constructor(name, grade, classNum, dob) {
    this.name = name;
    this.grade = grade;
    this.classNum = classNum;
    this.dob = dob;
  }
}

const student1 = new Student("이규혁", 3, 10, "990101");
const student2 = new Student("홍길동", 1, 1, "001212");
const student3 = new Student("장보고", 2, 5, "010312");

console.log(student1);
console.log(student2);
console.log(student3);
