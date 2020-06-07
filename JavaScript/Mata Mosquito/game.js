var altTam = 0
var larTam = 0

function altTamlar () {
    altTam = window.innerHeight
    larTam = window.innerWidth
}

altTamlar()

function radomPos(){

    if (document.getElementById('mosq')) {
        document.getElementById('mosq').remove()
    }

    var posX = Math.floor(Math.random() * altTam) - 90
    var posY = Math.floor(Math.random() * larTam) - 90

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY

    

    var mosq = document.createElement('img')
    mosq.src = 'img/mosca.png'
    mosq.className = randomSize() + " " + ladoRadom()

    mosq.style.left = posX + 'px'
    mosq.style.top = posY + 'px'
    mosq.style.position = 'absolute'
    mosq.id = 'mosq'
    document.body.appendChild(mosq)

    console.log(randomSize())
    console.log(ladoRadom())

}

function randomSize() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {

        case 0:
            return 'mosqui1'
        case 1:
            return 'mosqui2'
        case 2:
            return 'mosqui3'
    }
}

function ladoRadom() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return "ladoA"

        case 1:
            return "ladoB"
    }
}