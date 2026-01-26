// 공영주차장 문제
// 공영주차장의 주차 가능 대수는 다음과 같음
// 정기이용자(거주자) + 방문객
// 주차장 입구에 표시 되는 빈 주차구역 갯수는 방문객이 이용 가능한 댓수만큼만 표시
// 이는 정기이용자는 입출차를 자유롭게 할 수 있는 권리를 줘야 하기에
// ex) 주차장 입구에 만차 라고 나와있어도 정기권 이용자는 입차 가능

// 시간에 따라 요금이 올라가는 방식 (단 정기권 이용자는 정기권 기간 내에는 자유롭게 입출차 가능)
// 단 시간은 time 을 안배워서 정수로만 표현 (0~24)
// 다양한 할인 존재
// 경차, 저공해자동차 50% 감면
// 추가적으로 전기차는 공영주차장 내 전기차 충전소 이용 시 처음 1시간 까지 주차 요금 면제, 이후 부터는 정상 요금의 50% 가 부과 됨
// ex) 전기차가 충전 하면서 2시간 이용 시 = 1시간 무료 + 1시간 요금의 50% 금액 (저공해자동차 감면)

// 차 프로토타입
function Car(numberPlate, name, saleType = null) {
  this.numberPlate = numberPlate;
  this.name = name;
  this.saleType = saleType;
}

// 주차장 프로토타입
function ParkingLot(name, junggiParking, visitParking) {
  this.name = name;
  this.junggiParking = junggiParking;
  this.visitParking = visitParking;

  // 정기주차 차량 목록 리스트
  this.junggiCar = new Object();

  // 현재 주차장 내 주차가 되어 있는 차량
  this.parkingCars = new Object();

  // 주차장에 정기 주차를 신청
  this.enrollJunggiParking = () => {};

  // 입차
  this.enterParking = (car, enterTime) => {
    // 여기서 정기권 여부 확인 및 주차 가능댓수 확인
    this.parkingCars[car.numberPlate] = {
      numberPlate: car.numberPlate,
      name: car.name,
      saleType: car.saleType,
      enterTime: enterTime,
    };
  };

  // 출차
  this.exitParking = () => {};
}

const car1 = new Car("01가 1234", "EV5", "전기차");
const car2 = new Car("03노 1144", "그랜저");
const car3 = new Car("03노 7788", "소나타", "장애인");
const car4 = new Car("03노 1144", "레이");

const gangnamParking = new ParkingLot("강남 제1 주차장", 50, 30);

gangnamParking.enterParking(car1, 3);
console.log(gangnamParking);
