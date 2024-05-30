class Account {
  customerName;
  accountNumber;
  #balance; // private property

  constructor(name, balance = 0) {
    this.customerName = name;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  // private method
  #calculateInterest(amount) {
    console.log("calculating interest");
  }

  // setter property
  set setBalance(amount) {
    if (isNaN(amount)) {
      throw new Error("Invalid Input");
    }
    this.#balance = amount;
  }

  // getter property
  get getBalance() {
    return this.#balance;
  }
}

const myAccount = new Account("Suman", 2000);
// myAccount.#balance = 200     // cannot access private property
myAccount.setBalance = "4000";
console.log(myAccount);         // wont print balance in console bcoz its private
console.log(myAccount.getBalance);
