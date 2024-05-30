//------------------------------- Inheritance in constructor function -----------------------------------

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.balance = balance;
  this.accountNumber = Date.now();
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

// this is child fn
function CurrentAccount(customerName, balance = 0) {
    BankAccount.call(this, customerName, balance)
    this.transactionLimit = 5000
}

CurrentAccount.prototype = Object.create(BankAccount.prototype)

CurrentAccount.prototype.businessLoan = function (amount) {
    console.log("Take business loan", +amount);
}


// this is also child fn
function SavingAccount(customerName, balance = 0) {
    BankAccount.call(this, customerName, balance)
    this.transactionLimit = 6000
}

SavingAccount.prototype = Object.create(BankAccount.prototype)

SavingAccount.prototype.personalLoan = function (amount) {
    console.log("Take personal loan", +amount);
}


const akashAccount = new SavingAccount("Akash", 2000)
akashAccount.personalLoan(3000)



//-------------------------------  Inheritance in class ------------------------------------

class Account {
    customerName;
    accountNumber;
    balance;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

// child class
class SavingAccounts extends Account {
    transactionLimit = 5000;

    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }

    takePersonalLoan(amount) {
        console.log("Taking Personal loan: " +amount);
    }
}

// child class
class CurrentAccounts extends Account {
    transactionLimit = 10000;

    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }

    takeBusinessLoan(amount) {
        console.log("Taking Business loan: " +amount);
    }
}


const amanAccount = new SavingAccounts("Aman", 5000)
amanAccount.withdraw(500)
amanAccount.takePersonalLoan(400)
console.log(amanAccount);