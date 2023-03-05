const request = require('postman-request');

const weather = ({ longitude, latitude, location }, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=b39390eddd17bd715df809cbc05d6a0f&units=metric'
    request({ url: url, json: true }, (error, response) => {
        if (error)
            callback('Weather API service offline', undefined)
        else
            if (!longitude || !latitude)
            callback('No Data available. Please modify your search!', undefined)
        else
            callback(undefined,`The max and min temperature of ${location} is ${response.body.main.temp_max} and ${response.body.main.temp_min} and its feels like ${response.body.main.feels_like}`)

    })
}

module.exports = weather;
