const animal1 = {
  cat: "야옹이",
  dog: "누렁이",
  cow: "얼룩이",
  tiger: "어흥이",
  rabbit: {
    rabbit1: "토깽이",
    rabbit2: "토실이",
    rabbit3: "토박이",
  },
};

// 복사를 해보기
// 객체는 다르나 참조하고 있는 스택 내 메모리 주소는 동일

// 얕은 복사
// 객체 복사할 때 참조 주소값도 같이 복사하는거

// animal2.cat = "치즈";
// console.log(aniaml1);
// console.log(animal2);

// 깊은 복사
// **객체를 복사할 때 참조 주소도 [새롭게 객체]를 만드는 것
// 그러나 1깊이 밖에 안됨
// const animal3 = Object.assign({}, aniaml1);

// animal3.dog = "규혁이";
// animal3.rabbit.rabbit1 = "토목이";

// console.log(aniaml1);
// console.log(animal3);

// 스프레드 문법 (1뎁스 깊은복사)
const animal4 = { ...animal1 };
animal4.tiger = "타이어";

console.log(animal1);
console.log(animal4);

// 배열
const arr1 = Array.of("토깽이", "어흥이", "점박이", "얼룩이");
// const arr2 = arr1;

// arr2[0] = "토실이";

// 깊은 복사가 가능한거
// spread, slice, concat, filter, map
arr3 = [].concat(arr1);
arr3[0] = "토실이";

console.log(arr1);
console.log(arr3);
