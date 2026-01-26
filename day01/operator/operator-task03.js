// 동물
// 강아지, 고양이, 고라니, 호랑이
const animal = "호랑이"

// ** 모든 값을 변수에 담기
// 강아지라면 "멍멍"을 출력
// 고양이라면 "야옹"을 출력
// 고라니라면 "빼앵"을 출력
// 호랑이라면 "어흥"을 출력

// 동물 이름 및 울음소리 고정값 정의
const dog = '강아지';
const dogSound = '멍멍';
const cat = '고양이';
const catSound = '야옹'
const gorani = '고라니';
const goraniSound = '빼앵';
const tiger = '호랑이';
const tigerSound = '어흥';
const noneSound = '울음소리 정의 x';

// 선택한 동물 여부
const isDog = animal === dog;
const isCat = animal === cat;
const isGorani = animal === gorani;
const isTiger = animal === tiger;

// 동물 울음소리 초기화 및 결과
// 조건이 좀 많아지면 if 문이 좋을수도
const animalSound = isDog ? dogSound 
  : isCat ? catSound 
    : isGorani ? goraniSound 
      : isTiger ? tigerSound 
        : noneSound;
const result = animal+' '+animalSound;
console.log(result);