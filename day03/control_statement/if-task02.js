// 겨울 간식 테스트
// 붕어빵 먹는 부위
// "머리", "몸통", "꼬리"

let firstEat = '머리';
let reason;

const head = '머리'
const headReason = '한입에 먹기 좋아서';
const middle = '몸통'
const middleReason = '팥부터 먹고 싶어서';
const tail = '꼬리'
const tailReason = '바삭바삭함이 좋아서';

if(firstEat === head) {
  reason = headReason;
} else if(firstEat === middle){
  reason = middleReason;
} else {
  reason = tailReason;
}

let finalReason = `나는 붕어빵의 ${firstEat}부터 먹습니다. 왜냐하면 ${reason}`;
console.log(finalReason);

