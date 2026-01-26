// * 모든 값을 변수
// 시험 성적 문제 구하기
// 국어, 영어, 수학 점수를 받아서(직접 입력)

// 평균이 90점 이상이라면 A등급,
// 80점 이상이라면 B등급,
// 70점 이상이라면 C등급,
// 70점 미만이라면 F등급,

const gradeA = "A등급"
const aLimit = 90;
const gradeB = "B등급"
const bLimit = 80;
const gradeC = "C등급"
const cLimit = 70;
const gradeF = "F등급"
const userName = "홍길동"

// 총점과 평균을 구하고
let kor = 70
let eng = 70
let math = 71
let grade = ""
let total = kor + eng + math
let average = total / 3

if(average >= aLimit){
  grade = gradeA;
} else if(average >= bLimit){
  grade = gradeB;
} else if(average >= cLimit){
  grade = gradeC
} else {
  grade = gradeF;
}

let result = `${userName}님의 평균은 ${average}점, 등급은 ${grade}입니다.`
console.log(result);