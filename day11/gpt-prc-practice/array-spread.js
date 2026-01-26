// 실습을 위한 기본 배열 설정
const arr1 = Array.of(10, 20, 30, 40, 50);
const arr2 = Array.of(10, 20, 30, 40, 50, 60, 70, 80, 90);
const arr3 = Array.of(10, 20, 30, 40, 999, 50, 60, 70, 80, 90, 2);

// 스프레드를 사용해서 새로운 배열울 만들어봄
const newArr1 = [...arr1];

// 새로운 배열의 0번째 인덱스 값을 변경
newArr1[0] = 900;

// 기존 배열과 새로운 배열의 0번째 인덱스 비교
console.log(arr1);
console.log(newArr1);
// 결과: newArr1 의 0번째 인덱스 값은 바뀌었지만 기존 배열은 그대로 존재

// 여기서 질문: 배열의 스프레드도 깊은 복사처럼 보이지만 만약 배열의 원소가 객체 라면
// 깊은 복사가 불가능한지?

// 스프레드를 이용해서 합치는 방식 만들기
const totalArr = [...arr1, ...arr2, ...arr3];

console.log(totalArr);
// 결과: 잘 합쳐짐

// 질문: array 에서도 Object.assign() 과 같은 스프레드 매서드가 있는지?
