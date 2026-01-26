// % 연산자 활용
let num = 38;

// num가 홀수라면 "홀수입니다"를 출력 짝수라면 "짝수입니다"를 출력하기
let result = (num % 2 == 1) ? '홀수입니다' : '짝수입니다';
let result2 = num % 2 ? '홀수입니다' : '짝수입니다';
console.log(result);
console.log(result2);