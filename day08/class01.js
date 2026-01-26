function Animal2(name, age, specise) {
  this.name = name;
  this.age = age;
  this.specise = specise;

  console.log("좋다");
}

// 매개변수로 바로 받을 수 없다.
// 클래스에는 생성자 가 필요
// 먼저 동물 추상화
class Animal {
  static age = 10;

  // 클래스 만들 때 알아서 해당 함수 수행
  constructor(name, age, species, feed) {
    this.name = name;
    this.age = age;
    this.species = species || "";
    this.feed = feed;
  }
}

// 객체화
const rabbit = new Animal("규혁", 20, "포유류", "치킨공식");
console.log(rabbit.age);
const cat = new Animal("냥아치", 5, "고양이", "사료");
console.log(cat);
const dog = new Animal("멍멍청이", 5, "강아지", "사료");
console.log(dog);
