const aniaml1 = {
  cat: "야옹이",
  dog: "누렁이",
  cow: "얼룩이",
  tiger: "어흥이",
};

const aniaml2 = {
  rabbit: "토깽이",
  pig: "꿀꿀이",
  sheep: "양양이",
  chick: "삐약이",
};

// animal1, animal2 합치기!
const { cat, dog, cow, tiger } = aniaml1;
const { rabbit, pig, sheep, chick } = aniaml2;

// const { cat, dog, cow, tiger, rabbit, pig, sheep, chick } =aniaml1, aniaml2
// 여러 객체를 하나로 합쳐서 (새로운 객체) 를 반환하는 함수
const animal4 = Object.assign({}, aniaml1, aniaml2);

// 아니면
const animal5 = { ...aniaml1, ...aniaml2 };

console.log(dog);
console.log(pig);

// 합쳐보기
const totalAnimal = { cat, dog, cow, tiger, rabbit, pig, sheep, chick };
// console.log(animal4);
console.log(animal5);

const arr1 = Array.of(1, 2, 3, 4);
const arr2 = new Array(4).fill(0).map((_, i) => i + 1);
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// flot 이용하면 다차원 배열을 1차원 배열로 바꿀 수 있다
