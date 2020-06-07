x = 1

while (x < 4){
    x++
    console.log("Test")
    document.write("oll")
}


do {
    x++
    console.log("LOL")

} while(x < 6)


var arrayFor = ['Pedro', 'Cardozo', 19]

for(i=0; i < arrayFor.length; i++){
    console.log(arrayFor[i])
}

for(let j = 10; j >= 0; j-= 0.01) {
    console.log(j)
}

let k = 2

const r1 = k++ + ++k
/*
            2  + 4
*/
const r2 = k++ + k++
/*
            4  + 5
*/
const r3 = ++k + ++k
/*
            7 + 8
*/

const result  = r3 == 15 ? 'its 15' : 'its not 15'