let myArray = [1, 2, 3, 4, 5, 6]
let mySet = new Set(myArray)

mySet.add(100)
mySet.add(200)
mySet.add("100")
mySet.delete(2)
console.log(mySet.size)

//Pass an function with varible
mySet.forEach(function(val){
    console.log(val)
})

//Map
let myMap = new Map([
    {a1:'Hello'},
    {a2:'Oi'},
    {a3:'Hola'},
])

myMap.set({a4: 'Jsdhajd'})
myMap.delete(a4)

console.log("Result: ", myMap)

//Weak Set