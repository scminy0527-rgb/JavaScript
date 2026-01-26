// fetch api
// 내장 API
// 서버로부터 데이터를 요청하는 함수

// https://jsonplaceholder.typicode.com/users

// 비동기
const data = fetch("https://jsonplaceholder.typicode.com/users");
// data.then((response) => {
// console.log(response.json());
// Response 의 매서드
// .json() 객체에서 json 데이터를 js언어로 parse 하는 매서드
// });

// data.then((response) => response.json()).then((data) => console.log(data));
// console.log(data);

// https://jsonplaceholder.typicode.com/todos
// 1. 요청 fetch
// 최종 반환 타입 promise
const todoData = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => todos.map((todo) => todo.title))
  .then((titles) => console.log(titles))
  .catch(console.error);

// console.log(todoData);
