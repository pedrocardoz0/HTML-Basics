const objFor = {
    one: 'One 1',
    two: 'Two 2',
    three: 'Three 3',
    four: 'Four 4'
}

for (let key in objFor) {
    console.log(`Key - > ${key}\nValue - > ${objFor[key]}`)
}



/**
 * Class Created
 */
class Car {
    constructor(make, model) {
        this.make = make
        this.model = model
        this.userGrears = ['P', 'N', 'R', 'D']
        this.userGrear = this.userGrears[0]
    }

    shift(gear) {
        if(this.userGrears.indexOf(gear) < 0) // This make referance for the INSTANCE of the class
            throw new Error(`Invalid Gear: ${gear}`)
        this.userGrear = gear
    }
}

//Instance created, its a INSTANCE of Car (Class)
const car_1 = new Car('Ferrari', 'LaFerrari')
const car_2 = new Car('Tesla', 'Model S')
car_1.shift('D')
car_2.shift('R') 


//Prototype
console.group("%cPrototype", "color: #6713EE; font-size:20px;")
console.log(`%cResult: ${car_1.shift === Car.prototype.shift}`, "color:#2A1847; font-size: 18px;")
console.groupEnd();

//Static Method

class Boat{
    static vin() {
        return Boat.nexVin++
    }

    constructor(model, fab) {
        this.model = model
        this.ori = fab
        this.vin = Boat.vin()
    }

    static areSimilar(boat1, boat2) {
        return boat1.make === boat2.make && boat1.ori === boat2.ori
    }

    static areSame(boat1, boat2) {
        return boat1.vin === boat2.vin
    }
}

Car.nexVin = 0

const boat_1 = new Boat('Jhus','Type A')
const boat_2 = new Boat('Ford','Class N')


//Inheritance

class Vehicle {
    constructor() {
        this.passegers = []
    }

    addPassegers(p) {
        this.passegers.push(p)
    }

    deployAirbag() {
        console.log("NOP")
    }
}

class CarI extends Vehicle {
    constructor(){
        super()
    }

    deployAirbag() {
        console.log("BOMM")
    }
}

const c = new CarI()
const v = new Vehicle()

console.group("%cInheritance", "color: #6713EE; font-size:20px;")
console.log(c.deployAirbag())
console.log(v.deployAirbag())

v.addPassegers("Joah")
v.addPassegers("Ihser")

c.addPassegers("Pedro")
c.addPassegers("Heron")

console.log(c.passegers)
console.log(v.passegers)
console.groupEnd();


//Polymorphism
console.group("%cPolymorphism", "color: #6713EE; font-size:20px;")
console.group('Car instanceof')
console.log(c instanceof CarI)
console.log(c instanceof Vehicle)
console.log(c instanceof Boat)
console.groupEnd()

console.group('Boat instanceof')
console.log(boat_1 instanceof Boat)
console.log(boat_1 instanceof Vehicle)
console.log(boat_1 instanceof Car)
console.groupEnd()
console.groupEnd()

// Multiple Inheritance

class User {

    constructor(name, email) {
        this.name = name
        this.email = email
    }

    static checkUser() {
        return 'There are 500 users online'
    }

    register() {
        return `Now ${this.name} is resgistered`
    }
}

let obj = new User('Pedro', 'pedro@email.com')

console.log(User.checkUser())


//Static Method

class Square {
    constructor(width) {
        this.width = width
        this.height = width
    }

    static isSame(a, b){
        return a.width === b.width // It returns true if they are in same dimensions
    }

    areaSize(){
        return `The area is ${this.width * this.height}`
    }
}

let square_1 = new Square(10)
let square_2 = new Square(4)

/*
Static Method does not need to have an instace to work,
usually they are used as helper functions, think that when
you use a static method is to make like an functions for the CLASS
*/

console.group("%cStatic Method", "color: #6713EE; font-size:20px;")
console.log(square_1.areaSize())
console.log(square_2.areaSize())
console.log(Square.isSame(square_1, square_2))
console.groupEnd()