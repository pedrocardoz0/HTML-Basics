class User {
    SeeUser() {
        return (
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(resp =>{
                    if(resp.ok) {
                        return resp.json()
                    } else {
                        console.log('Error')
                    }
                })
                .then(data => {
                    console.log(data)
                    var pTag = document.getElementById('output')
                    pTag.innerHTML = data['title']
                })
            )
    }

    SendUser() {
        return (
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'User Custom',
                    body: 'Demm',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then(resp => resp.json())
            .then(data => console.log(data))
        )
    }
}


const here = new User()