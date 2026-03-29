// 다음과 같이 정보가 있을 때
// 각 학생들의 평균을 구하여
// 성적 1등과 성적 꼴등 출력하기
// + 꼴등에게 응원메세지도 출력
const students = [
  { name: "감대훈", math: 88, kor: 60, eng: 70 },
  { name: "이구혁", math: 15, kor: 40, eng: 35 },
  { name: "김유종", math: 84, kor: 80, eng: 40 },
  { name: "김세중", math: 92, kor: 35, eng: 100 },
  { name: "엄석태", math: 75, kor: 60, eng: 86 },
  { name: "오규오", math: 100, kor: 80, eng: 80 },
  { name: "노만균", math: 65, kor: 100, eng: 40 },
  { name: "문윤섬", math: 76, kor: 75, eng: 58 },
  { name: "신민철", math: 59, kor: 100, eng: 96 },
];

// 함수화
const sortStudentByAvg = (...students) => {
  // 새로운 비교 원
  const tempStudents = [...students];

  // 각 학생의 평균을 구하기
  tempStudents.forEach(({ math, kor, eng }, i, arr) => {
    arr[i].avg = Math.floor((math + kor + eng) / 3);
  });

  // 성적순 배치
  tempStudents.sort((stu1, stu2) => stu2.avg - stu1.avg);

  // 1등 추출
  const first = tempStudents[0];

  // 꼴등 추출
  const last = tempStudents[students.length - 1];

  // 결과 반환
  return {
    firstStudent: first,
    lastStudent: last,
  };
};

const { firstStudent, lastStudent } = sortStudentByAvg(...students);

// 1등 추출
console.log(`1등: ${firstStudent.name} 평균: ${firstStudent.avg}`);

// 꼴등 추출
console.log(`꼴등: ${lastStudent.name} 평균: ${lastStudent.avg} ㅠㅠㅠㅠ`);
