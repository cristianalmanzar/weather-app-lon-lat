const axios = require('axios');

const getWeather = async (lat, lon) => {
    const resp = await axios.get(`https://openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b6907d289e10d714a6e88b30761fae22&units=metric`)


    return {
        country: resp.data.sys.country,
        state: resp.data.name,
        temp: resp.data.main.temp,
    }
}


module.exports = {
    getWeather
}