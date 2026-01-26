// 나이는 상수로 설정, 삼항 연산자
// ** 중요 ** 값을 모두 변수에 담아보기 
const age = 23;
const ageLimit = 19;
const ageText = '['+age+']'
const userName = '[홍길동]';

// 실습 나이가 19살 이상이면 "입장 가능" 출력
// 19살 미만이면 "입장 불가" 출력
let isEnterAvail = age >= ageLimit;
let entryMessage = isEnterAvail ? '[입장 가능]' : '[입장 불가]';
console.log(entryMessage);

// 나이가 짝수면 "짝수" 출력
// 나이가 홀수면 "홀수" 출력
let isEven = 23 % 2 ? '[홀수]' : '[짝수]';
console.log(isEven);

// 나이가 16살이면 "당첨" 출력
// 아니면 "꽝입니다" 출력  
let isAge16 = age === 16 ? '[당첨]' : '[꽝입니다]';
console.log(isAge16);

// 콘솔 결과: [본인이름]님은 [입장 가능]
console.log(userName+'님은',entryMessage+'\n'+ageText + ', '+isEven + ', ' + isAge16+'.');
// [나이], [홀수], [꽝입니다].  
// console.log(ageText + ', '+isEven + ', ' + isAge16+'.');

// 최대한 코드 내 변수가 아닌 하드코딩 상수는 일단 제외
// 내가 생각하는 모든 가능하다고 생각하는 변수는 다 변수에 담기
// 모든 값은 변수에 담기 a