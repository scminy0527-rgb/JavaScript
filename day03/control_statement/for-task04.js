// 1. 10 ~ 1까지 출력하기
for(let i = 0; i < 10; i++){
  let num = 10 - i;
  console.log(num);
}


// 1부터 n 까지 모든 합 구하기
let n = 70;
let totalSum = 0;

for(let i = 0; i < n; i++){
  let num = i + 1;
  totalSum += num;
}

let finalResult = `1부터 ${n}까지 모든 수 합은 ${totalSum} 입니다.`;
console.log(finalResult);