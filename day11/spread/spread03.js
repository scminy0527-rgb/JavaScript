const arr1 = Array.of(10, 20, 30, 40, 50);
const arr2 = Array.of(10, 20, 30, 40, 50, 60, 70, 80, 90);
const arr3 = Array.of(10, 20, 30, 40, 999, 50, 60, 70, 80, 90, 2);

// 값을 몇개나 전달할 지 모를 때 전달한 값을을 모두 출력
const print = (...datas) => {
  for (let data of datas) {
    console.log(data);
  }
};

// 매개변수로 인자로 넘길때도 활용 가능
print(...arr1);

// // 몇 개를 전달할 지 모르지만 최대값과 최소값을 구해주는 매서드
// const getMaxAndMin = (...datas) => {
//   let minNum = 0;
//   let maxNum = 0;

//   datas.forEach((data, i, arr) => {
//     console.log(data);
//     if (i === 0) {
//       maxNum = data;
//       minNum = data;
//     } else {
//       maxNum = data > maxNum ? data : maxNum;
//       minNum = data < minNum ? data : minNum;
//     }
//   });

//   // 결과
//   const msg = `최대값: ${maxNum}, 최소값: ${minNum}`;
//   console.log(msg);

//   // 겍체 타입으로 반환
//   return {
//     min: minNum,
//     max: maxNum,
//   };
// };

// const result = getMaxAndMin(...arr3);
// console.log(result);

const randomNumbers = new Array(10000)
  .fill(0)
  .map((data) => Math.floor(Math.random() * 10000));

console.log(randomNumbers);

// 가변 매개변수
const getMaxMin = (...numbers) => {
  // 스프레드
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return {
    min: min,
    max: max,
  };
};

// 스프레드
const { min, max } = getMaxMin(...randomNumbers);
console.log(min);
console.log(max);
