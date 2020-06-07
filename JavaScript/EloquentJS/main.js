const cep = document.getElementById('cep')

const showData = (result) => {
    for(const keyValue in result) {
        if(document.getElementById(keyValue)){
            document.getElementById(keyValue).value = result[keyValue]
        }
    }
}

cep.addEventListener('blur', (e) => {
    let search = cep.value.replace('-', '')
    console.log(search)

    const options = {
        method: 'GET',
        mode: 'cors', 
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json`, options)
    .then(response => { response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Erro ' + e.massage))
})