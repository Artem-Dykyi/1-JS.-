const Account = function({login, email}) {
    this.loginAc = login,
    this.emailAc = email

    // getInfo() {
    //     return `Login: "${this.loginAc}", Email: "${this.emailAC}"`
    // }
}

console.log(Account.prototype.getInfo) // function

const mangol = new Account ({
    login: "Mangozedog",
    email: "mango@dog.woof",
});

// mangol.getInfo() // Login: "Mangozedog", Email: "mango@dog.woof"

const poly = new Account({
    login: "Poly",
    email: "poly@mail.com",
})

// poly.getInfo() // Login: "Poly", Email: "poly@mail.com"

//2//


class User {
    constructor({ name, age, followers }) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }

    getInfo() {
        return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
    }
}

const mango = new User({
    name: "Mango",
    age: 2,
    followers: 20,
});

console.log(mango.getInfo()); 

const polyna = new User({
    name: "Polyna",
    age: 3,
    followers: 17,
});

console.log(polyna.getInfo()); 

//3//

class Storage {
    constructor(items) {
        this.items = items; 
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

}

const storage = new Storage([
    "Нанітоіди",
    "Пролонгер",
    "Залізні жупи",
    "Антигравіатор"
])

const items = storage.getItems();
console.table(items); 

storage.addItem("Дроїд");
console.table(storage.items)

//4//

class StringBuilder {
    constructor(element) {
        this.value = element
    }
    get valueS(){
        return this.value
    }
    append(str){
        this.value += str;
    }

    prepend(str) {
        this.value = str + this.value;
    }

    pad(str) {
        this.value = str + this.value + str;
    }
}

const builder = new StringBuilder(".")

builder.append("^")
console.log(builder.value)

builder.prepend("^")
console.log(builder.value)

builder.pad("=")
console.log(builder.value)



//5//

class CarTesla {
    constructor({maxSpeed, speed = 0, isOn, distance = 0, price}){
        this.maxSpeed = maxSpeed;
        this.speed = speed;
        this.isOn = isOn;
        this.distance = distance;
        this.price = price
    }

    static getSpecs(car) {
        console.log(`Max Speed: ${car.maxSpeed}, Speed: ${car.speed}, Is On: ${car.isOn}, Distance: ${car.distance}, Price: ${car.price}`);
    }


    turnOn(){
        this.isOn = true
    }

    turnOff(){
        this.isOn = false
        this.speed = 0
    }

    accelerate(value){
        if(this.speed + value <= this.maxSpeed){
            this.speed += value
        } else {
            this.speed = this.maxSpeed;
        }
    }

    decelerate(value){
        if (this.speed - value >= 0) {
            this.speed -= value;
        } else {
            this.speed = 0;
        }
    }

    drive(hours) {
        if(this.isOn){
            this.distance += hours * this.speed
        }
    }
}

const mustang = new CarTesla({maxSpeed: 200, price: 2000})

mustang.turnOn()
mustang.accelerate(50)
mustang.drive(2)

CarTesla.getSpecs(mustang)


mustang.decelerate(20)
mustang.drive(1)
mustang.turnOff()

CarTesla.getSpecs(mustang)

console.log(mustang.price)
