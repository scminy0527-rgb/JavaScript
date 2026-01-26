// 비동기 코드에 throw 날리기
// 비동기 코드 안에서 발생한 에러는 못잡음

//  비동기는 비동기 내부에 흐름이 있기 때문에 try catch 를 내부에 해서 잡아야 함
// try {
//   console.log("코드 실행");
//   setTimeout(() => {
//     try {
//       name;
//     } catch (error) {
//       console.log("비동기 코드 오류");
//     }
//   }, 5000);
//   console.log("코드 실행2");
// } catch (error) {
//   console.log(error);
// }

// try {
//   getTest = async () => {};
// } catch (err) {}

try {
  name;
} catch (err) {
  console.log("예외 발생");
} finally {
  // 외부 리소스 해제 할 때 사용하는 코드
  console.log("예외가 발생 하든 아니든 무조건 실행");
}
