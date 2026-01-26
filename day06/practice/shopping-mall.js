//쇼핑몰이있다.
//상품이 있다.
//상품은 이름,가격을 가지고있다.
//쇼핑몰은 상품 등록, 상품 검색, 가격수정기능을 가지고 있다.
//쇼핑몰(검색(includes), 가격수정, 상품 등록)
//상품(이름, 가격)

// 상품 프로토타입
function Item(id, name, price){
  this.id = id
  this.name = name;
  this.price = price;
}

// 쇼핑몰 프로토타입
function ShoppingMall(){

  // 상품들을 담을 프로퍼티
  this.shoppingItem = new Object();

  // 해당 내부 매서드는 아이템을 추가해주는 매서드
  // 이때 아이디 겹치는거 막아야 함 (id 는 고유해야 함)
  this.addItem = (item) => {
    if(this.shoppingItem[item.id] !== undefined){
      console.log('해당 id 값은 이미 존재합니다.');
    } else {
      console.log(`아이템 ${item.name} 추가`);
      this.shoppingItem[item.id] = item
    }
  }

  // 상품을 검색 해주는 매쏘드
  this.searchItem = (keyword) => {
    for(let itemIndex in this.shoppingItem){
      // item 은 인덱스 값
      let item = this.shoppingItem[itemIndex];

      // 여기서 검색어 키워드가 맞는지 보기
      if(item.name === keyword){
        console.log(item);
      }
    }
  }

  // 가격수정을 해주는 매쏘드
  this.changePrice = (selectedItem, price) => {
    if(price < 0){
      console.log('에러: 가격은 음수가 될 수 없습니다.')
    } else {
      // 선택한 상품 아이디
      let itemId = selectedItem.id;
      let itemName = selectedItem.name;
      let beforePrice = this.shoppingItem[itemId].price
  
      // 선택한 상품의 가격을 변경
      this.shoppingItem[itemId].price = price;
  
      let result = `상품 ${itemName}의 가격을 ${beforePrice}원 에서 ${price}원 으로 변경`
      console.log(result);
    }
  }
}

// 구현 단계
// 쇼핑몰 구현
const shoppingMall = new ShoppingMall();

// 상품들 정의
const item1 = new Item('100100', '사과', 1000);
const item2 = new Item('100200', '충전기', 2000);
const item3 = new Item('100300', '핸드폰', 50000);

// 상품을 추가하기
shoppingMall.addItem(item1);
shoppingMall.addItem(item2);
shoppingMall.addItem(item3);

// 상품 잘 추가 되었나 qa 하기
console.log(shoppingMall);

// 아이템 검색
shoppingMall.searchItem('충전기');

// 가격 변경
shoppingMall.changePrice(item1, 5000);

// 결과 확인
console.log(shoppingMall)
console.log(item1);

console.log('여기서 부터는 qa 입니다');
// qa
console.log(shoppingMall.shoppingItem['100101']);

