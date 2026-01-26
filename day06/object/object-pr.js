function User(name, age){
  this.name = name;
  this.age = age;
}

const user1 = new User('신철민', 10);
const user2 = new User('황미야', 30);

function Bank(){
  this.account = new Object()
}

bank = new Bank();
console.log(bank);
bank.name = '우리은행';

bank.account['user1'] = {userName: '김철수'}
bank.account['puser2'] = user2

console.log(bank);

// bank.account.user1.name = '박철민';

console.log(bank);
console.log(user1);