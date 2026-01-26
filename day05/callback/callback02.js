// 성과 이름을 받아서 fullname 을 만들고 fullname 에 님 을 붙어서 출력
// 1. 이름 합치기
// 2. 님 붙이기
// 3. 출력하기

function makeFullName(lastName, firstName, callback1){
  let fullname = lastName + firstName;
  callback1(fullname);
}

const addNim = (userName, callback) => {
  callback(userName + ' 님')
}

const print = (data) => {
  console.log(data);
}


// 결과 출력
makeFullName('신','철민', (fullname) => {
  addNim(fullname, print);
});



// 성과 이름을 받아서 풀네임을 만들고 풀네임에 님을 붙여서 출력
const add = (data1, data2, callback) => {
  callback(data1 + data2)
}

const addNimNew = (data, callback) => {
  callback(data + "님")
}

const printNew = (data) => {
  console.log(data)
}

add("홍", "길동", (fullName) => {
  addNim(fullName, (data) => {
    console.log(data)
  })
})
