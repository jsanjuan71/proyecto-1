

axios.get('https://api.github.com/users/jsanjuan71')
    .then( response => {
        if(  response.status == 200 ) {
            console.log("response.data: ", response.data)
        }
    })

axios.post('https://api.github.com/users', {
    name: 'Julio',
    lastname: 'Sanjuan'
})
    .then( ({data}) => {
        console.log("post", data)
    })
    .catch( error => {
        console.log("error", error)
    })


/*axios.put('https://api.github.com/users', {
    name: 'Cesar'
})

axios.delete('https://api.github.com/users/julio')*/
