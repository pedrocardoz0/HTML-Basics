/*
If you do this it not work beacuause it is declared in block scope not in global
{
    let objectUser = {
    name: 'Pedro',
    city: 'Marília',
    age: 19,
    }
}
*/

let objectUser = {
    name: 'Pedro',
    city: 'Marília',
    age: 19,
}

function Hello() {
    return `hello, ${this.name}`
}

console.log(Hello.call(objectUser))


/*
Closure 
*/

function init() {
    name = 'Hello'
    const helloUser = () => alert(name)
    helloUser()
}

init()

const message = (function() {
    var mess = 'Olaa'
    return `The massage is: ${mess}`
})()

console.log(message)


var globalVar

const functionEsp = function() {
    {
        globalVar = "Global"
        var blockVar = "Block"
        console.log(globalVar)
    }
    console.log(blockVar)
}

functionEsp()
//console.log(blockVar)