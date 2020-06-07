/*
const getValue = function () {
    return value = document.getElementById('inpt-box').value
}
*/

try {

    var checkValue = function() {
        var value = parseInt(document.getElementById('inpt-box').value)
        console.log(value)
        if (isNaN(value)) {
            throw errVar = new Error("Not valid dude !")
        }
    }    
} catch (errVar) {
    console.log('Ops Error', errVar)
} finally {
    console.log("Allways it will appear here")
}
