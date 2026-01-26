// 회사에 회사원이 3명 존재한다.
// 프로토타입 으로 추상화
// 직원 추상화
function Employee(name, age, position, salary){
  this.name = name;
  this.age = age;
  this.position = position;
  this.salary = salary
}

// 회사 추상화
// 일단 회사는 월급 협상 등의 내부 규칙만 존재하고 직원은 없는 상태
// 직원은 추후 뽑으면 한명씩 추가되는 형태
function Company(){
  // 해당 매쏘드의 핵심
  // 제일 좋은건 여기서 객체 내 다른 원소에 접근 해서 직접 손대는게 제일 좋을듯 함.
  // 핵심은 함수 자체가 객체를 받아서 객체 내 값을 바꿀 수 있게 해줘야 함.
  // 기존: 인상값 반환 -> 반환 값으로 객체 내 값 변경 이후: 직접 바뀐 값으로 객체 내 값 도 바꿔야 함.
  this.deal = (salary) => {
    return salary * 1.1;
  }
  // 여기에는 각종 인사고과, 해고 등 여러 기능 존재 할 수 있음
}

// 회사원 각각을 객체화 하기
// 회사원1
// 이름: 홍길동
// 나이: 20
// 직책: 사원
// 월급: 2_000_000
const employee1 = new Employee('홍길동', 20, '사원', 2_000_000)

// 회사원2
// 이름: 이순신
// 나이: 30
// 직책: 대리
// 월급: 2_500_000
const employee2 = new Employee('이순신', 30, '대리', 2_500_000)

// 회사원3
// 이름: 장보고
// 나이: 25
// 직책: 사원
// 월급: 2_100_000
const employee3 = new Employee('장보고', 25, '사원', 2_100_000)

// 프로토타입, 객체 실습
// 회사의 연봉 협상
// 회사의 deal 메서드를 사용하면,
// 각자 회사원마다 월급을 10%로씩 증가시켜준다.
// 월급이 10% 증가한 회사원의 이름과 월급을 출력하시오.

// 1. 회사는 비어있는 상태. (규범만 존재)
const company = new Company()

// 2. 직원이 들어온 상태
company.employee1 = employee1;
company.employee2 = employee2;
company.employee3 = employee3;

console.log(company);

// 빠른 for 문 사용
for(let key in company){
  // 일단 해당 company 객체의 모든 키를 받음
  // 여기서 매쏘드를 제외한 나머지 키 (임직원) 일 때 월급 수행 로직 수행
  if(key !== 'deal'){
    // 이제 월급 인상 수행 해야 함
    // 인상 전 월급 및 사원 이름
    const employee = company[key]
    let salary = employee.salary
    let empName = employee.name;

    // 객체의 변수에 주소를 통해서 접근 후 해당 값을 변경
    // 샐러리를 매개면수를 전달할 수 있다면 객체 또한 하나의 매개변수로 전달할 수 있음.
    employee.salary = company['deal'](salary)

    // 인상 된 후 월급
    let upperSalary = employee.salary;

    // 결과문 작성
    let result = `${empName}님의 월급은 ${salary}원 에서 ${upperSalary}원 으로 10$ 인상되었습니다.`
    console.log(result);
  }
}

console.log(company);