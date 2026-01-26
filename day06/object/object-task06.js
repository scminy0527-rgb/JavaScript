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

// 일단 각 접근
// 일단 각 학생의 평균을 구하기
const calcAverage = (studentList) => {
  for(let data of studentList){
    let math = data.math;
    let kor = data.kor;
    let eng = data.eng;
    // 총점 및 평균 구하기
    let totalScore = math + kor + eng;
    let average = totalScore / 3;
  
    // 평균 삽입
    console.log(average);
    data['average'] = average;
  }
}


// 순위 매겨서 결과 알려주는 함수 만들기
const informRank = (studentList) => {
  // 학생 인덱스 (1등, 꼴지)
  let firstRankIndex = 0;
  let lastRankIndex = 0;

  // 자기보다 큰 수가 보이면 최대가 갱신
  let maxAvg = 0;
  // 자기보다 작은게 보이면 최소 갱신
  let minAvg = 100;

  for(let student of studentList.entries()){
    let index = student[0];
    let studentData = student[1];
    let avgScore = studentData.average;

    // 최대 최소 구분
    // 최대 구분
    if(avgScore > maxAvg){
      maxAvg = avgScore;
      firstRankIndex = index;
    }
    // 최소 구분
    if(avgScore < minAvg){
      minAvg = avgScore;
      lastRankIndex = index
    }
  }

  // 결과 나옴
  // 1등 및 꼴지 학생 추출
  let firstRankStudent = studentList[firstRankIndex];
  let lastRankStudent = studentList[lastRankIndex];

  let firstResult = `1등: ${firstRankStudent.name} 평균${firstRankStudent.average}점`;
  let lastResult = `꼴지: ${lastRankStudent.name} 평균${lastRankStudent.average}점 화이팅 ㅠㅠ😪`
  console.log(firstResult);
  console.log(lastResult);
}

//
// 
// 
// 동작 단계

// 먼저 학생들의 평균을 구하기
calcAverage(students);

// 학생들의 평균 구한거를 가지고 순위 매기기
informRank(students);


