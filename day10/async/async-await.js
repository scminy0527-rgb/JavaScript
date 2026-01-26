// 비동기 -> 동기 로 합류 시키기 위한
// 비동기를 동기로 바꾼게 아니라 동기 흐름 내로 합류를 시킨거
// async await
// 함수 에서 사용되는 문법
// https://jsonplaceholder.typicode.com/users
// const getUsers = async () => {
//   // then 을 쓰는 이유: 통째로 프로미스 이기에
//   const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
//     (res) => res.json(),
//   );
//   // console.log(data);
//   return data;
// };

// const result = await getUsers();
// console.log(result);

// https://jsonplaceholder.typicode.com/todos
const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();

  const completed = todos.filter((todo) => todo.completed).slice(0, 10);
  console.log(completed);
};

getTodos().then();
