const BankAccount = class {
  customerName;
  accountNumber;
  balance;

  constructor(name, balance = 0) {
    this.customerName = name;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
};

const rakeshAcc = new BankAccount("Rakesh", 2000);
rakeshAcc.deposit(2500);
rakeshAcc.withdraw(500);
console.log(rakeshAcc);
