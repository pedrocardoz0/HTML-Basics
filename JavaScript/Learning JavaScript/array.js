const arrayUser = ["Pedro", "Cardozo", 19, "U$ 7,000"]

console.log(arrayUser[0], arrayUser[1], arrayUser[2])
console.log(typeof (arrayUser[0], arrayUser[1], arrayUser[2]))


const arrayView = [
    'Line One',
    'Line Two',
    'Line Three'
]

console.log(arrayView)

let arrayObjects = [
    {name:"Pedro", city:"Berlin"},
    {name:"Joah", city:"Moscow"}
]

console.log(arrayObjects[0])

/*
Array Property
*/

console.log("Resutado:", arrayObjects.length)
console.log("Another way to acces array: ", arrayObjects[arrayObjects.length - 1])

arrayObjects[2] = {name:"Nathan", city:"Sao Paulo"}
console.log(arrayObjects[arrayObjects.length - 1])

arrayObjects[arrayObjects.length - 1] = ''