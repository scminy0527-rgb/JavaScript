// 어떤 값을 받으면 그 값을 콘솔에 출력해주는 함수
function print(data){
  console.log(data);
}

// 사용 하려는 사람은 값을 넣으려고 함
print('값');

// 성 과 이름을 받아서 풀네임을 출력해주는 함수사용
function fullPrint(lastName, firstName){
  let fullName = lastName + firstName;
  console.log(fullName);
}

fullPrint('신','철민');


// 이름 뒤에 님 붙이는 함수
function addNim(userName){
  return userName + '님';
}

console.log(addNim('황미야'));