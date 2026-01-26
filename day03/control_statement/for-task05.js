// 별 찍기
//     *
//    ***
//   *****
//  *******
// *********
// console.log('    *')

// 알고리즘 규칙
// 첫번째 줄 공백 5 별 1개
// 두번째 줄 공백 4 별 3개
// 세번째 줄 공백 3 별 5개
// 네번째 줄 공백 2 별 7개
// 다섯번째 줄 공백 1 별 9개

for(let i = 0; i < 5; i++){
  // 각 층에 필요한 공백 및 * 갯수
  let space = 5 - i;
  let stars = 2*(i+1) - 1
  // 빈 초기값
  let result = '';

  // 각 층 마다 필요한 공백 및 * 를 문자열에 더하기
  for(let j = 0; j < space; j++){
    result += ' '
  }
  for(let k = 0; k < stars; k++){
    result += '*'
  }

  console.log(result);
}


// 구구단
// 2단부터 9단 까지 이중 for 문
// 2x1 = 2    3x1 = 3   4x1=4
// 2x2 = 4    3x2 = 6   4x2=8
// 2x3 = 6    3x3 = 9   4x3=12

// 순서: 행 방향으로 나가고 열 방향으로 내려가기 반복
for(let i = 0; i < 9; i++){
  // 열 방향으로 내려가기
  result = '';
  for(j = 0; j < 8; j++){
    // 먼저 행 방향으로 구구단 문자열 만들기 (즉 j 가 앞에 있는 구조)
    let num = i+1;
    let dan = j+2;
    gugudan = `${dan}x${num}=${dan*num}`
    
    result += gugudan;
    if(j === 9){ continue; }
    result += '\t';
  }
  console.log(result);
}
