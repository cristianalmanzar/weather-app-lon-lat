const weather = require('./weather/weather');


weather.getWeather(40.750000, -74.000000)
       .then( resp => {
           console.log(resp)
       })