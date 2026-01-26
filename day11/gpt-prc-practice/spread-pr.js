// 이번에 해볼거는 스프레드
// 스프레드는 두개의 객체 혹은 배열을 합치는데 유리

const animal1 = {
  cat: "야옹이",
  dog: "누렁이",
  cow: "얼룩이",
  tiger: "어흥이",
};

const animal2 = {
  rabbit: "토깽이",
  pig: "꿀꿀이",
  sheep: "양양이",
  chick: "삐약이",
};

// 이제 animal2 과 animal1 을 합친 하나의 객체를 만들려고 함
// 다음과 같이 두가지 방법을 쓸 수 있음

// 방법 1. Object.assign 이용
// 질문: 이때 앞에 new 를 붙이지 않아야 하는데 왜 그런건지?
const obj1 = Object.assign({}, animal1, animal2);

// 방법 2: 가변매개변수 이용
const obj2 = { ...animal1, ...animal2 };

// 결과 확인 콘솔
console.log(obj1);
console.log(obj2);
// 결과는 동일함
