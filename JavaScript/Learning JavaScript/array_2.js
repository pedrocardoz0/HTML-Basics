const arrayFirst = [
    (function() {return 'Hi'})(),
    test = () => 'test',
    [0, 1, 2, 3],
    true,
    'Pedro',
    03,
    [0, 1, 2, 3, 4, 5].length
]

console.log(arrayFirst[0])


console.log("****** Adding Methods ***********")
const arrayAplha = ['a', 'b', 'c', 'd']

arrayAplha.push("v") //Add in the end
arrayAplha.pop() //Remove in the end
arrayAplha.unshift("1") // Add in the begging
arrayAplha.shift() // Remove in the begging
console.log(arrayAplha)

const arrayNumber = [1, 2, 3, 4, 5]

console.log(arrayNumber.concat(5, 6, 7)) // Return a COPYYYY
console.log(arrayNumber.concat([10, 11, 12], 'a','b', [13, 14, 15], {first:'Pedro'}))
console.log(arrayNumber)

console.log("****** Adding Methods (Close) ***********")

console.log("****** Slice Methods ***********")
const arraySlice = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(arraySlice.slice(1))
console.log(arraySlice.slice(1, -2))

console.log("****** Slice Methods (Close) ***********")

console.log("****** FIll Methods ***********")
const arrayFill = new Array(5).fill(1)
console.log(arrayFill)
console.log(arrayFill.fill("M", 1, -2))

console.log("*********** FIll Methods (Close) ***********")

console.log("*********** Sorting Methods ***********")
const arraySort = ['a', 'b', 'c', 'd']
console.log(arraySort.reverse())
console.log(arraySort.sort())
console.log([14, 41, 55, 1, 5, 2, 6, 4, 3, 0].sort())
console.log("*********** Sorting Methods (Close)***********")


console.log("*********** Array Search ***********")
const arraySearch = [[1,3], 0, 1, {name: "Zyeh", age: 22}, 45, 22, {name: "Pedro", age: 19}]
console.log(arraySearch.indexOf(0)) // Return the first index of the element
console.log(arraySearch.findIndex(g => g.name === "Pedro")) // It will take the index of the object
console.log(arraySearch.findIndex(k => k.name === "Zyeh"))
console.log(arraySearch.find(h => h.name === "Pedro")) // Returns the complete object
console.log(arraySearch.some(j => j % 2 == 0)) // It will return true or false (If some value inside the array matches with the statement)

const arraySearchNumber = [10, 20, 30, 40, 50, 60]
console.log(arraySearchNumber.every(j => Number.isInteger(j))) // It checks all the values inside the array

console.log("*********** Array Search (Close)***********")

console.log("*********** Map ***********")
const arrayProduct = [{name: "iPhone", price: 1900}, {name: "Mac Book", price: 2500}]
const productArray = arrayProduct.map(p => p.name)
const priceArray = arrayProduct.map(o => o.price)
const descountArray = priceArray.map(p => p * 0.9)

const finalArray = new Array(productArray, priceArray, descountArray)
finalArray.map( l => console.log(l))

console.log("*********** Map (Close)***********")

console.log("*********** Filter ***********")
const arrayFilter = [
    {
        name: "Jue",
        age: 3,
        type: "dog",
    },
    {
        name: "Khet",
        age: 2,
        type: "cat",
    },
    {
        name: "Loli",
        age: 4,
        type: "dog",
    },
]

const dogs = arrayFilter.filter(d => d.type === "dog") 
console.log(dogs)
const ageDog = dogs.reduce(function (soma, dog) {
        return soma + dog.age
}, 0);
console.log("Avrage Age:", ageDog / (dogs.length))

const arrayFilterMult = [1, 1, 1, 1, 1, 1, 1, 1, 1]
const resultFilter = arrayFilterMult.reduce((a, k) => a + k, 0)
console.log("Result Mult Reduce: ", resultFilter)
console.log("*********** Filter (Close) ***********")

