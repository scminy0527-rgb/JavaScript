// 다음과 같이 정보가 있을 때
// 각 학생들의 평균을 구하여
// 성적 1등과 성적 꼴등 출력하기
// + 꼴등에게 응원메세지도 출력
const students = [
   {name: "감대훈", math: 88, kor: 60, eng: 70},
   {name: "이구혁", math: 15, kor: 40, eng: 35},
   {name: "김유종", math: 84, kor: 80, eng: 40},
   {name: "김세중", math: 92, kor: 35, eng: 100},
   {name: "엄석태", math: 75, kor: 60, eng: 86},
   {name: "오규오", math: 100, kor: 80, eng: 80},
   {name: "노만균", math: 65, kor: 100, eng: 40},
   {name: "문윤섬", math: 76, kor: 75, eng: 58},
   {name: "신민철", math: 59, kor: 100, eng: 96},
]

const top = { average: 0, student: students[0] }
const bottom = { average: 0, student: students[0] }

for(let student of students){
  const total = student.math + student.kor + student.eng
  const average = total / 3 

  if(top.average < average){
    top.student = student
    top.average = average
  }

  if(bottom.average === 0){
    bottom.average = average
  }

  if(bottom.average > average){
    bottom.student = student
    bottom.average = average
  }

}

console.log(top)
console.log(bottom)
console.log("구혁이 화이팅! 이 구혁의 바닥은 바로 나!")
