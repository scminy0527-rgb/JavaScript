// 이름 : 여러분들의 성함 // 변수 또는 상수
const userName = '신철민'
// 국어: 80점
let koreanScore = 80;
// 수학: 70점
let mathScore = 70;
// 영어: 90점
let englishScore = 90;
// 과학: 20점
let scienceStore = 20;
let isPass;

const passLimit = 60;

// 평균, 학점, 구하기
let totalScore = koreanScore + mathScore + englishScore + scienceStore
let averageScore = totalScore / 4

// if문을 사용해서 평균 60점 이상은 합격, 60점 미만은 불합격 출력하기
if (averageScore >= passLimit){
  isPass = '합격'
} else {
  isPass = '불합격'
}

// 최종 문장
let result =  `${userName}님의 이번 총점은 ${totalScore} 평균은 ${averageScore} 이므로 ${isPass}입니다.`
console.log(result);
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다.