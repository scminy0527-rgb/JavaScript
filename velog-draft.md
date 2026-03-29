# JS + DOM 복습 정리 - HTML 위젯을 JS로 제어하기

## 들어가며

JSP를 배우는 중에 곧 Spring + React 과정으로 넘어갈 예정이라, 오랜만에 HTML과 JS의 DOM 조작 부분을 복습했다.
기억이 가물가물했지만 직접 코드를 치면서 다시 감을 잡을 수 있었다.

---

## 1. 요소 선택 & 내용 변경

DOM을 다루려면 먼저 HTML 요소를 JS로 **선택**해야 한다.

```js
// id로 선택하는 두 가지 방법
const el1 = document.getElementById("text-target");
const el2 = document.querySelector("#text-target"); // CSS 선택자 문법
```

선택한 요소의 텍스트는 `textContent` 로 읽거나 변경할 수 있다.

```js
const textTarget = document.querySelector("#text-target");
const changeBtn = document.querySelector("#btn-change-text");
const resetBtn = document.querySelector("#btn-reset-text");

changeBtn.addEventListener("click", () => {
  textTarget.textContent = "텍스트가 바뀌었어요! 😊";
});

resetBtn.addEventListener("click", () => {
  textTarget.textContent = "이 텍스트를 버튼으로 바꿔보세요.";
});
```

> `textContent` vs `innerHTML`
>
> - `textContent` : 순수 텍스트만 변경 (XSS 위험 없음)
> - `innerHTML` : HTML 태그까지 포함해서 변경 가능

---

## 2. 스타일 & 클래스 제어

### style 속성으로 직접 변경

```js
const styleTarget = document.querySelector("#style-target");

// CSS 속성명은 camelCase 로 작성
styleTarget.style.color = "red";
styleTarget.style.fontSize = "24px";
styleTarget.style.backgroundColor = "yellow";
```

### classList 로 클래스 추가/제거

미리 CSS에 클래스를 정의해두고, JS에서 해당 클래스를 붙였다 떼는 방식이다.

```css
/* CSS */
.highlight {
  background-color: yellow;
  font-weight: bold;
}
```

```js
// 클래스 조작 메서드
styleTarget.classList.add("highlight"); // 추가
styleTarget.classList.remove("highlight"); // 제거
styleTarget.classList.toggle("highlight"); // 있으면 제거, 없으면 추가
styleTarget.classList.contains("highlight"); // 포함 여부 확인 (true/false)
```

`toggle` 을 사용하면 상태 변수 없이 간결하게 켜고 끌 수 있다.

```js
// ❌ 상태 변수로 직접 관리
let isOn = false;
btn.addEventListener("click", () => {
  if (isOn) {
    el.classList.remove("highlight");
    isOn = false;
  } else {
    el.classList.add("highlight");
    isOn = true;
  }
});

// ✅ toggle 사용
btn.addEventListener("click", () => {
  el.classList.toggle("highlight");
});
```

---

## 3. 이벤트 처리

### 기본 이벤트 등록

```js
const inputName = document.querySelector("#input-name");
const btnGreet = document.querySelector("#btn-greet");
const output3 = document.querySelector("#output-3");

btnGreet.addEventListener("click", () => {
  if (!inputName.value) {
    output3.textContent = "이름을 입력해주세요.";
    return;
  }
  output3.textContent = `안녕하세요, ${inputName.value}님!`;
});
```

### 마우스 이벤트

```js
const eventBox = document.querySelector("#event-box");

eventBox.addEventListener("mouseenter", () => {
  eventBox.style.background = "#aac";
  eventBox.textContent = "마우스가 들어왔어요!";
});

eventBox.addEventListener("mouseleave", () => {
  eventBox.style.background = "#dde";
  eventBox.textContent = "여기에 이벤트";
});

eventBox.addEventListener("click", () => {
  eventBox.textContent = "클릭됐어요! 😄";
});
```

### event 객체와 event.target

`addEventListener` 의 콜백 함수는 **이벤트 객체(event)** 를 매개변수로 받는다.
이 객체 안에 이벤트와 관련된 다양한 정보가 담겨 있다.

```js
btn.addEventListener("click", (event) => {
  event.target; // 이벤트가 발생한 요소 (여기선 btn 자체)
  event.type; // 이벤트 종류 ("click")
  event.clientX; // 마우스 X 좌표
  event.key; // 키보드 입력값
});
```

> **핵심 개념**
>
> - `event.target` → 이벤트가 **발생한** 요소를 동적으로 참조
> - 다른 요소 → 미리 `querySelector` 로 선택해둔 변수로 직접 참조
> - `forEach` 콜백의 인자 → 이미 요소 자체이므로 `.target` 불필요

---

## 4. 폼 위젯 제어

```js
const nameForm = document.querySelector("#form-name");
const ageForm = document.querySelector("#form-age");
const genderForm = document.querySelector("#form-gender");
const hobbyForm = document.querySelectorAll(".hobby"); // checkbox 목록
const contactForm = document.querySelectorAll("input[name='contact']"); // radio 목록

btnFormSubmit.addEventListener("click", () => {
  // checkbox - 체크된 항목만 수집
  const hobbyList = [];
  hobbyForm.forEach((checkBox) => {
    if (checkBox.checked) hobbyList.push(checkBox.value);
  });

  // radio - 선택된 항목 찾기
  let contactValue = "";
  contactForm.forEach((c) => {
    if (c.checked) contactValue = c.value;
  });

  const result = `이름: ${nameForm.value} | 나이: ${Number(ageForm.value)} | 성별: ${genderForm.value} | 취미: ${hobbyList.join(", ")} | 연락처: ${contactValue}`;
  output4.textContent = result;
});
```

- `querySelectorAll` 은 배열처럼 생긴 **NodeList** 를 반환 → `forEach` 사용 가능
- `checked` 로 체크 여부 확인
- `Number()` 로 문자열 → 숫자 타입 변환

---

## 5. 동적 요소 추가 / 삭제

JS로 HTML 요소를 직접 생성해서 DOM에 추가할 수 있다.

```js
btnAddItem.addEventListener("click", () => {
  if (!itemInput.value) return; // 빈값 방지

  const itemLi = document.createElement("li");
  const removeBtn = document.createElement("button");

  itemLi.textContent = itemInput.value;
  removeBtn.textContent = "삭제";

  // 삭제 버튼 클릭 시 해당 li 제거
  removeBtn.addEventListener("click", () => {
    itemLi.remove();
  });

  itemLi.appendChild(removeBtn); // li 안에 버튼 추가
  dynamicList.appendChild(itemLi); // 리스트에 li 추가

  itemInput.value = ""; // 입력창 초기화
});
```

---

## 6. 클래스로 요소 순회

```js
const textList = document.querySelectorAll(".list-item");

btnColorize.addEventListener("click", () => {
  textList.forEach((item) => {
    // classList.contains 로 특정 클래스 포함 여부 확인
    item.style.color = item.classList.contains("odd") ? "tomato" : "steelblue";
  });
});

btnResetColor.addEventListener("click", () => {
  textList.forEach((item) => {
    item.style.color = "";
  });
});
```

---

## 배열 메서드 간단 정리

복습하면서 배열 메서드도 다시 정리됐다.

| 메서드         | 반환값                      | 원본 수정 |
| -------------- | --------------------------- | --------- |
| `forEach`      | 없음 (undefined)            | X         |
| `push` / `pop` | 변경된 length / 제거된 요소 | O         |
| `map`          | 새 배열                     | X         |
| `filter`       | 새 배열                     | X         |
| `find`         | 첫 번째 일치 요소           | X         |

> React에서는 원본 배열을 직접 수정하지 않고 `map`, `filter` 처럼 **새 배열을 반환하는 메서드**를 주로 사용한다.
> 배열은 객체이므로 `b = a` 로 복사하면 같은 주소를 가리켜 원본도 함께 변경된다.
> 이를 방지하려면 스프레드 연산자 `[...a]` 나 `slice()` 로 새 배열을 만들어야 한다.

---

## 마치며

오랜만에 DOM 복습을 해봤는데 생각보다 금방 감이 돌아왔다.
특히 `classList.toggle`, `event.target` 의 개념이 다시 명확해졌고,
배열의 원본 수정 문제가 왜 React에서 중요한지도 연결이 됐다.
