//1. BankAccount

class BankAccount {
  constructor() {
    this.ownerName = "lev";
    this.balance = 500;
  }

  deposit(amount) {
    this.balance = this.balance + amount;
  }

  withdraw(amount) {
    this.balance = this.balance - amount;
  }

  getBalance() {
    return this.balance;
  }
}









//2. "Shape"

class Shape {
  constructor() {
    this.area = 0;
  }

  getArea() {
    return this.area
  }
}

class Circle extends Shape {
  constructor() {
    super();
    this.area = 0;
  }
    getArea(radius) {
      this.area = radius ** 2 * 3.14;
      return this.area.toFixed(2);
    }
}

class Rectangle extends Shape {
  constructor() {
    super();
    this.area = 0;
  }
    getArea(width, height) {
      return this.area = width * height;
    }
}

class EquilateralTriangle extends Shape { //Рівносторонній трикутник
  constructor() {
    super();
    this.area = 0;
  }
    getArea(a) {
      this.area = (a ** 2 * Math.sqrt(3))/4;
      return this.area.toFixed(2);
  }
}

const circle = new Circle();
console.log(circle.getArea(5)); // 78.50

const rectangle = new Rectangle();  
console.log(rectangle.getArea(4, 6)); // 24

const triangle = new EquilateralTriangle();
console.log(triangle.getArea(4)); // 6.93 (4√3)










//3. User

class User {
  constructor(nickname, email) {
    this.nickname = nickname;
    this.email = email;
    this.id = Math.floor(Math.random() * 1000);
  }

  getInfo() {
    return this.nickname + ", ID:" + this.id + " Email: \"" + this.email + "\"";
  }

  printInfo() {
    console.log(this.getInfo());
  }
}

class Admin extends User {
  constructor(email) {
    super("Admin", email);
  }

  getInfo() {
    return "Admin. Email: \"" + this.email + "\"";
  }
}

const user1 = new User("andrew.tatach", "tatach_minecraft228@gmail.com");
const user2 = new User("levko_gamer", "levko123@gmail.com");
const user3 = new User("maxim_pro", "maxim_pro@yahoo.com");
const admin1 = new Admin("levko_fansavochka@kek.com");

const users = [user1, user2, user3, admin1];

users.forEach(user => user.printInfo());

// andrew.tatach. ID:3742 Email: "tatach_minecraft228@gmail.com"
// levko_gamer. ID:8591 Email: "levko123@gmail.com" 
// maxim_pro. ID:1205 Email: "maxim_pro@yahoo.com"
// Admin. Email: "levko_fansavochka@kek.com"
