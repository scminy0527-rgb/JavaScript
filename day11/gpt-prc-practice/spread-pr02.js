// 스프레드 및 가변매개변수 실습
// ... 가 붙었을 때 구분을 하는 능력을 키우기

// 0부터 10000까지 랜덤한 수가 들어간 원소 1만개 배열 만들기
const randomNumbers = new Array(10000)
  .fill(0)
  .map(() => Math.floor(Math.random() * 10000));

console.log(randomNumbers);
// 결과: 1만개 랜덤 원소

// 해당 배열 중에 가장 큰 수와 가장 작은 수는 무엇인지 표시해주기

// 함수에 전달 되는 매개변수에 붙은 ... : 가변매개변수
// 가변매개변수의 개념: 원소가 몇개 들어올 지 모를때 주로 사용
const getMaxMin = (...numbers) => {
  // Math.max의 매개변수에 값을 전달하는 방식: 스프레드
  const maxNum = Math.max(...numbers);
  const minNum = Math.min(...numbers);

  // 최대 최소를 반환 (이때 객체 형태로 해서 하나의 값 처럼 2개의 값 반환 가능)
  return {
    max: maxNum,
    min: minNum,
  };
};

// getMaxMin 함수의 반환형: 객체
// 따라서 함수를 통한 리턴값을 구조분해할당을 해서 받을 수 있음
// 이때 함수에 전달되는 값은 스프레드를 해서 넣은거임
const { max, min } = getMaxMin(...randomNumbers);

// 결과 보기
console.log(max);
console.log(min);
