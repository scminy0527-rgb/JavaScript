// 사용자가 몇 개나 데이터를 입력할 지 모를 때
// number 타입과 string 타입을 분리해서 각각의 입력 갯수 구하기
// 단, 문자열에 정수가 포함되어있다면 number타입으로 취급한다.
// ex) myFun("a", "10", "a10", 20, "1")
// 결과: string: 1개, number 4개

// 문자열의 메서드
// 글자가 포함되어있는지의 여부를 true 또는 false 리턴
// "".includes("해당글자")
const checkStringOrNumber = (...datas) => {
  let intCount = 0
  let floatCount = 0
  let strCount = 0

  // typeOf(NaN) === number -> true
  for(let i = 0; i < datas.length; i++){
    let value = datas[i]
    if(typeof(value) === "string"){
      
      let includesInteger = false;

      // 문자열
      for(let i = 0; i < value.length; i++){
        let isInt = (value[i] - 0)
        if((value[i] - 0) === 0){
          includesInteger = true
          break
        }else if(isInt){
          includesInteger = true
          break
        }
      }

      if(includesInteger){
        intCount++
      }else{
        strCount++
      }


    }else{
      // 숫자형
      let isFloat = String(value).includes(".")
      if(isFloat){
        floatCount += 1
      }else{
        intCount++
      }
    }
  }

  return `정수의 개수: ${intCount}, 실수의 개수: ${floatCount}, 문자열의 개수: ${strCount}`
}

let result = checkStringOrNumber("10", "a10", "a", "7", 7, "8", 10, 6, 1.1, "0")
console.log(result)