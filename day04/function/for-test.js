// for 문 break 범위 테스트
for(let i = 0; i < 10; i++){
  console.log(`현재 외부 for문 ${i}인덱스`);
  for(let j = 0; j < 6; j++){
    console.log(`현재 외부 for문 ${i}인덱스, 내부는 ${j}인덱스`);

    if(i === 3 && j === 2){ break;}
  }
}