var fetch = require('node-fetch')

async function getDataFromAPI() {
    // return fetch(`https://api.github.com/users/lebrancconvas`)
        // .then(response => response.json())
        // .then(data => console.log(JSON.stringify(data, null, "\t")))
        let response = await fetch(`https://api.github.com/users/lebrancconvas`)
        let data = await response.json()
        console.log(JSON.stringify(data, null, "\t"))
}

getDataFromAPI()
