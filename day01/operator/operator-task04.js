// * 모든 값을 변수
// 시험 성적 문제 구하기
// 국어, 영어, 수학 점수를 받아서(직접 입력)
const userName = '홍길동'
const koreanGrade = 80;
const englishGrade = 90;
const mathGrade = 95;
const numberOfSubject = 3;

// 총점과 평균을 구하고
const totalGrade = koreanGrade + englishGrade + mathGrade;
const averageGrade = totalGrade / numberOfSubject;

// 평균이 90점 이상이라면 A등급,
// 80점 이상이라면 B등급,
// 70점 이상이라면 C등급,
// 70점 미만이라면 F등급
const aRateLimit = 90;
const aRate = 'A등급';
const bRateLimit = 80;
const bRate = 'B등급';
const cRateLimit = 70;
const cRate = 'C등급';
const fRate = 'F등급';

const isRateA = averageGrade >= aRateLimit;
const isRateB = averageGrade >= bRateLimit;
const isRateC = averageGrade >= cRateLimit;

// 최종 등급 계산
const rate = (isRateA) ? aRate 
  :isRateB ? bRate
    :isRateC ? cRate
      :fRate

// 등급을 출력하기
console.log(averageGrade);
console.log(rate);
console.log(`${userName}님의 평균 점수는 ${averageGrade}이며 등급은 ${rate}입니다.`);