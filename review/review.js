// ============================================================
// JS + DOM 복습 실습 파일
// ============================================================
// 각 섹션에 TODO 주석이 있는 곳에 코드를 직접 작성해보세요!
// 작성 후 브라우저에서 index.html 을 열어 결과를 확인하세요.
// ============================================================

// ============================================================
// 섹션 1: 요소 선택 & 내용 변경
// ============================================================

const textTarget = document.querySelector("#text-target");
const output1 = document.querySelector("#output-1");
const changeBtn = document.querySelector("#btn-change-text");
const resetBtn = document.querySelector("#btn-reset-text");

changeBtn.addEventListener("click", () => {
  textTarget.textContent = "텍스트가 바뀌었어요! 😊";
  output1.textContent = "텍스트 변경 완료!";
});

resetBtn.addEventListener("click", () => {
  textTarget.textContent = "이 텍스트를 버튼으로 바꿔보세요.";
  output1.textContent = "";
});

// ============================================================
// 섹션 2: 스타일 & 클래스 제어
// ============================================================

const styleTarget = document.querySelector("#style-target");
const redChangeBtn = document.querySelector("#btn-color-red");
const blueChangeBtn = document.querySelector("#btn-color-blue");
const toggleHighLight = document.querySelector("#btn-toggle-highlight");
const fontBigBtn = document.querySelector("#btn-font-big");

redChangeBtn.addEventListener("click", () => {
  styleTarget.style.color = "red";
});

blueChangeBtn.addEventListener("click", () => {
  styleTarget.style.color = "blue";
});

toggleHighLight.addEventListener("click", () => {
  styleTarget.classList.toggle("highlight");
});

fontBigBtn.addEventListener("click", () => {
  styleTarget.style.fontSize = "24px";
});

// ============================================================
// 섹션 3: 이벤트 처리
// ============================================================

const inputName = document.getElementById("input-name");
const btnGreet = document.getElementById("btn-greet");
const output3 = document.getElementById("output-3");

// TODO: btnGreet 클릭 시 inputName 에 입력된 이름을 읽어
//       output3 에 "안녕하세요, [이름]님!" 을 출력하세요.
//       이름이 비어있으면 "이름을 입력해주세요." 를 출력하세요.
btnGreet.addEventListener("click", function () {
  const hello = `안녕하세요, [${inputName.value}]님!`;
  output3.textContent = hello;
});

// --- 마우스 이벤트 ---
const eventBox = document.getElementById("event-box");

// TODO: eventBox 에 아래 이벤트를 등록하세요.
//   - mouseenter → 배경색을 "#aac" 로 변경, 텍스트를 "마우스가 들어왔어요!" 로 변경
eventBox.addEventListener("mouseenter", () => {
  eventBox.style.background = "#aac";
  eventBox.textContent = "마우스가 올라왔어요";
});

//   - mouseleave → 배경색을 "#dde" 로 되돌리기, 텍스트를 "여기에 이벤트" 로 되돌리기
eventBox.addEventListener("mouseleave", () => {
  eventBox.style.background = "#dde";
  eventBox.textContent = "여기에 이벤트";
});

//   - click      → 텍스트를 "클릭됐어요! 😄" 로 변경
eventBox.addEventListener("click", () => {
  eventBox.textContent = "클릭됐어요! 😄";
});

// ============================================================
// 섹션 4: 폼 위젯 제어
// ============================================================

const btnFormSubmit = document.getElementById("btn-form-submit");
const output4 = document.getElementById("output-4");
const nameForm = document.querySelector("#form-name");
const ageForm = document.querySelector("#form-age");
const genderForm = document.querySelector("#form-gender");
const hobbyForm = document.querySelectorAll(".hobby");
const contactFrom = document.querySelectorAll("input[name='contact']");

let result4 = "";

// TODO: btnFormSubmit 클릭 시 아래 값들을 읽어 output4 에 표시하세요.
//   - form-name    → input value

//   - form-age     → input value (Number 로 변환)
//   - form-gender  → select value
//   - hobby-*      → checkbox 의 checked 여부를 확인해서 선택된 값만 배열로 수집
//   - contact      → radio 중 checked 된 요소의 value
//
// 출력 형식 예시:
//   이름: 홍길동 | 나이: 25 | 성별: male | 취미: 코딩, 운동 | 연락: email
//
// 힌트:
//   - document.querySelectorAll('input[name="contact"]') 로 radio 버튼 목록을 가져올 수 있어요.
//   - Array.from() 과 .filter() 를 활용해보세요.
btnFormSubmit.addEventListener("click", () => {
  // 체크된 취미만 배열로 수집
  const hobbyList = [];
  hobbyForm.forEach((checkBox) => {
    if (checkBox.checked) hobbyList.push(checkBox.value);
  });

  // 선택된 radio 값 찾기
  let contactValue = "";
  contactFrom.forEach((c) => {
    if (c.checked) contactValue = c.value;
  });

  const r = `이름: ${nameForm.value} | 나이: ${Number(ageForm.value)} | 성별: ${genderForm.value} | 취미: ${hobbyList.join(", ")} | 연락처: ${contactValue}`;
  output4.textContent = r;
});

// ============================================================
// 섹션 5: 동적 요소 추가 / 삭제
// ============================================================

const itemInput = document.getElementById("item-input");
const btnAddItem = document.getElementById("btn-add-item");
const dynamicList = document.getElementById("dynamic-list");

// TODO: btnAddItem 클릭 시 itemInput 에 입력된 텍스트로 새로운 <li> 를 추가하세요.
//   - <li> 안에는 항목 텍스트와 "삭제" 버튼이 함께 있어야 합니다.
//   - "삭제" 버튼 클릭 시 해당 <li> 를 제거해야 합니다.
//   - 입력값이 비어있으면 추가하지 않습니다.
//   - 추가 후 itemInput 을 비워주세요.
//
// 힌트:
//   - document.createElement("li") 로 새 요소를 만들 수 있어요.
//   - parentElement.removeChild(child) 또는 child.remove() 로 삭제할 수 있어요.

btnAddItem.addEventListener("click", () => {
  const itemName = itemInput.value;
  const itemLi = document.createElement("li");
  const removeBtn = document.createElement("button");

  itemLi.textContent = itemName;
  removeBtn.textContent = "삭제";

  removeBtn.addEventListener("click", () => {
    itemLi.remove();
  });

  itemLi.appendChild(removeBtn);
  dynamicList.appendChild(itemLi);
});

// ============================================================
// 섹션 6: 클래스 이름으로 요소 순회 (day08 복습)
// ============================================================

const btnColorize = document.getElementById("btn-colorize");
const btnResetColor = document.getElementById("btn-reset-color");

// TODO: btnColorize 클릭 시
//   - class "list-item" 을 가진 모든 요소를 선택
//   - class "odd" 인 요소 → 글자색 "tomato"
//   - class "even" 인 요소 → 글자색 "steelblue"
//   힌트: item.classList.contains("odd") 로 클래스 포함 여부 확인 가능

// TODO: btnResetColor 클릭 시 모든 list-item 의 글자색을 "" (빈 문자열) 로 초기화

const textList = document.querySelectorAll(".list-item");
btnColorize.addEventListener("click", () => {
  textList.forEach((t) => {
    t.style.color = t.classList.contains("odd") ? "tomato" : "steelblue";
  });
});

btnResetColor.addEventListener("click", () => {
  textList.forEach((t) => {
    t.style.color = "";
  });
});
