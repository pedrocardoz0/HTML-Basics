function exampleTest() {
    return arguments
}

console.log(exampleTest(x = 10, y = 20, z = 30, h = 50))

function exampleOne(g) {
    return `THe value is ${g}`
}

console.log(exampleOne(h = 22))

/*
Operating with objects
*/
function exampleObject(people) {
    console.log(people.name)

    people.name = "Jhoa 2"
    people = {
        name: "Fush",
        age:  25,
    }
    /*
    remeber about scopes, if you're doing in block scope it wil, be just there
    */
    console.log('Result: ', people.name)
}

userInfo = {
    name: "Other",
    age: 19,
}

exampleObject(userInfo)
console.log(userInfo)


function studyCase() {
    return objectCaller = {
        first: function () {return "Olá"},
        second() {return "Hi"},
        third() {return "你好"},
    }
}

console.log(studyCase().third())

/*
Destructuring Arguments
*/

function destructuringArgs ({name, age, city}) {
    return `Name: ${name} - Age: ${age} - City: ${city}`
}


objectDestruct = {
    name: "Pedro",
    age: 19,
    city: "Marília",
}

console.log(destructuringArgs(objectDestruct))


function destructuringArray([name, second_name, age, , city = "Marília"]) {
    return `Name: ${name} - Second Name: ${second_name} - Age: ${age} - City: ${city}`
}

const arrayDestruct = ['Pedro', 'Cardozo', 19]
console.log(destructuringArray(arrayDestruct))