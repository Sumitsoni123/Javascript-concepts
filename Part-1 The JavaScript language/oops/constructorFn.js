// this is constructor function with First Alphabet in Capital
function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.balance = balance;
  this.accountNumber = Date().now;

  //   this.deposit = (amt) => {
  //     this.balance += amt;
  //   };

  //   this.withdraw = (amt) => {
  //     this.balance -= amt;
  //   };
}

const rakeshAccount = new BankAccount("Rakesh", 1000);
// rakeshAccount.deposit(2000);
// rakeshAccount.withdraw(500);
console.log(rakeshAccount);

// Now instead of creating deposit nd withdraw property for every fun, we can avod memeory usage by adding it in prototype
// In prototype, we cant use arrow fn because this will try to find property from outer scope and add it there

BankAccount.prototype.deposit = function (amt) {
  this.balance += amt;
};

BankAccount.prototype.withdraw = function (amt) {
  this.balance -= amt;
};

rakeshAccount.deposit(2000)
console.log(rakeshAccount);