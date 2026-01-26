// https://jsonplaceholder.typicode.com/todos
// 1. todos데이터를 요청 후 값으로 가져온 데이터를 제목: title로 변경 후 출력
// ex)
// 제목: title1~
// 제목: title2~
// 제목: title3~
const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();

  todos
    .map((todo) => todo.title)
    .forEach((title) => console.log(`제목: ${title}`));
};

// 함수 실행
getTodos();

// https://jsonplaceholder.typicode.com/comments
// 2. comments데이터를 요청 후 값으로 가져온 데이터 중 email의 아이디만 변경 후 출력
// ex) Eliseo@gardner.biz -> Eliseo

// https://jsonplaceholder.typicode.com/comments
// 3.  comments데이터를 요청 후 값으로 가져온 데이터 중 name을 뒤집어서 가져온 후 출력
const getComments = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const commentList = await response.json();

  // 이름만 따로 담는거도 하기
  const nameList = commentList.map((comment) => comment.name);

  // 아이디만 해서 출력
  // commentList 에 id 속성 추가
  commentList.forEach((comment, i, arr) => {
    const email = comment.email;
    const name = comment.name;
    const reversedName = name.split("").reverse().join("");

    const id = email.split("@")[0];
    arr[i].id = id;
    arr[i].reverseName = reversedName;

    // console.log(id);
    // console.log(reversedName);
  });
  // console.log(commentList);
  // console.log(nameList);
};

getComments();
