// 사용자가 몇 개나 데이터를 입력할 지 모를 때
// number 타입과 string 타입을 분리해서 각각의 입력 갯수 구하기
// 단, 문자열에 정수가 포함되어있다면 number타입으로 취급한다.
// ex) myFun("a", "10", "a10", "20", "1")
// +문자: 강제형변환

// 문자열 인 경우 (순수 문자, 10a 같은 숫자 문자 혼합)
// 숫자 인 경우

const countDataType = (...datas) => {
  // 초기값 정의
  let numTypes = 0;
  let strTypes = 0;
  // 매개변수 길이
  let datasLen = datas.length;

  // 데이터 배열 중 각각 하나씩 보기
  // 리스트 원소기준
  for(let i = 0; i < datasLen; i++){
    // 한덩이 원소를 먼저 잡기
    let data = String(datas[i]);

    // 해당 한덩이(datas 의 원소) 의 배열 길이를 일단 확인
    let lenData = data.length;
    let type = 'string';

    // 숫자가 하나라도 있다면 숫자 타입, 아니면 문자 타입으로 하기
    // 원소 내 구성요소 기준
    for(let j = 0; j < lenData; j++){
      let dataComponent = (data[j]);

      // 컴포넌트를 int 로 강제 형 변환 해서 만들기
      let strToNumComponent = + dataComponent

      // 만약 숫자 이거나 혹시라도 0 이라면 숫자라고 판단
      if(strToNumComponent || strToNumComponent === 0){
        type = 'number';
      }
    }

    // 타입을 가지고 판단
    if(type === 'string'){
      strTypes++;
    } else {
      numTypes++;
    }
  }

  let resultMsg = `숫자 타입: ${numTypes}개, 문자 타입: ${strTypes}개`;
  console.log(resultMsg);
}

countDataType("a", "10", "a10", "20", "1", "a", '10.63', 2);


// console.log((parseInt('a')));
// .includes('해당 글자')
// 문자열에 해당 글자가 있는지 여부를 참 혹은 거짓으로 반환해줌
// 숫자일 때 문자로 바꾸고 . 가 있는지 보는걸로도 실수여부 확인 가능


console.log(typeof(+'a'));
console.log(typeof('a'));




// 1. 일단 강제 형변환 이전에 해당 값이 순수 숫자인지, 문자 인지만 판단

// 숫자 라면
// 정수 인지, 실수 인지 판단

// 문자 라면
// 순수 문자열 인지, 아니면 숫자가 하나라도 포함 되어 있는지