class Data {
  data = 10;

  // 정적변수, 정적할당
  static data_s = 10;

  // this 키워드는 안붙임
  increase() {
    this.data++;
  }

  increaS() {
    Data.data_s++;
  }
}

// console.log(Data.data);
// console.log(Data.data_s);

// let staticTast = new Data();
// staticTast.increase();
// staticTast.increase();
// staticTast.increase();
// staticTast.increase();
// staticTast.increase();
// staticTast = new Data();
// staticTast.increase();
// staticTast.increase();
// staticTast.increase();
// staticTast.increase();
// staticTast.increase();
// console.log(staticTast.data);

let staticTast = new Data();
staticTast.increaS();
staticTast.increaS();
staticTast.increaS();
staticTast.increaS();
staticTast.increaS();
staticTast = new Data();
staticTast.increaS();
staticTast.increaS();
staticTast.increaS();
staticTast.increaS();
staticTast.increaS();
console.log(Data.data_s);

class Company {
  static totalIncome = 0;

  work(income) {
    Company.totalIncome += income;
  }
}

new Company("홍길동", 20).work(1000000);
new Company("김길동", 30).work(1000);
new Company("이규혁", 10).work(-10000);
console.log(Company.totalIncome);
