const fetch = require('whatwg-fetch');

export const getVehicles = () => {
    fetch('http://localhost:3001/vehicles', {
        method: "GET",
        mode: 'no-cors',
    })
        .then(function (response) {
            console.log('response', response);
            return response.json()
        }).catch(function (error) {
            console.log(error)
        })
}