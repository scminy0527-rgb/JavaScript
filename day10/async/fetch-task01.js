// https://jsonplaceholder.typicode.com/posts
// 서버로 데이터 요청 후 post 데이터 중 body 데이터로 바꿔서 출력

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((datas) => datas.map((data) => data.body))
  .then((data) => console.log(data));

// 이때 then 을 가지고 ui 변경 가능한지???
