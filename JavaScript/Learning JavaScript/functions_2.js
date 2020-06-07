objectUser = {
    name: "Henn", 
    age: 22,
    city: "Toronto",
    rank: "G3",
    game: "Lol",
    reverse() {
        const self = this
        return `Game ${self.game} - Rank ${self.rank}`
    },
}

console.log(objectUser.reverse())

/*
This is avalible inside function body
*/

const g = function () {
    return `Arguments ${arguments[0]}`
}

console.log(g('Ola'))

/*
Arrow Function
*/

console.log("********START OF ARROW SECTION********")

const helloArrow = () => 'Hello'
const varArrow = (a, b, c, d) => a + b + c + d
const nameArrow = (name, last) => `Hello ${name} ${last}`
const singleArrow = name => `Hello ${name}`

const multArrow = nameMult => { 
    return {
        greetEn: () => `Hi, ${nameMult}`,
        greetPT: () => `Olá, ${nameMult}`,
    }

}

console.log(helloArrow())
console.log(varArrow(10, 10, 10, 10))
console.log(nameArrow('Pedro', 'Cardozo'))
console.log(singleArrow('Joah'))
console.log(multArrow("Pedro").greetPT())

console.log("********END OF ARROW SECTION********")
console.log("********START OF CALL, APPLY and BIND********")

const userPedro = {
    name: "Pedro",
    age: 19,
    city: "Marília",
}

const userMaria = {
    name: "Maria",
    age: 20,
    city: "Turin",
}

function usersMain () {
    return `Hello, ${this.name}`
}

function usersAdd (birth, ocupation) {
    this.birthday = birth,
    this.ocupation = ocupation
}

console.log(usersMain.call(userMaria))

usersAdd.call(userPedro, "06/02/2001", "Developer")
usersAdd.call(userMaria, "14/08/2000", "Designer")

console.log(userPedro)
console.log(userMaria)