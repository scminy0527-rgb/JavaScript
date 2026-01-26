// if 문
// 지각, 결석, 병결

// 삼항: 조건식이 1개 일때
// if ~ else: 조건식이 여러개 일때
let attendance = "병결";

if(attendance === '지각'){
  console.log('지각생');
}

if(attendance === '지각'){
  console.log('지각');
}

// if else 문
// 조건식이 1개 이면서 비즈니스 로직을 작성할 때 사용
if(attendance === '지각'){
  console.log('지각 싫어요');
} else {
  console.log('정상 출결');
}

// if ~ else if ~ else 
// 다중 조건식 일때
// 조건식에 맞는 형태의 로직만 하나 수행됨
if(attendance === '지각'){
  console.log('지각 싫어요 !!');
} else if(attendance === '병결'){
  console.log('아프지 마요');
} else if(attendance === '잠수'){
  console.log('연락은 소중해');
} else {
  // 위에 모든 조건식을 만족하지 않을때
  console.log('결석자');
}

if(10 === 10){}
if(true){}
if(10){}

// 조건식 에는 true 또는 false 로 취급되는 값이 들어올 수 있음.