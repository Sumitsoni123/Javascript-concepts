class User {
  static id = 1;

  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
    this.id = User.id++;
  }

  // static block runs for the 1st instance of class only
  static {
    console.log("runs for the 1st instance only");
  }

  // static property can be used in by other static method using this keyword
  static checkCache() {
    console.log("static method can access other static property using this id: ", this.id);
  }

  clearCache() {
    console.log("non-static method can access other static property using classname id: ", User.id);
  }
  static compareByAge(user1, user2) {
    return user1.age - user2.age;
  }

  static compareByIncome(user1, user2) {
    return user1.income - user2.income;
  }
}

const user1 = new User("Sumit", 28, 10000);
const user2 = new User("Neha", 22, 1000);
const user3 = new User("Raja", 20, 6000);

const allUsers = [user1, user2, user3];
allUsers.sort(User.compareByIncome);
console.log(allUsers);
User.checkCache();
user1.clearCache()