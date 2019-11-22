const axios = require('axios');

const getClima = async ( lat,lng ) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=dcc898e3099bbf1d2409dd04d1232f61&units=metric`)

    return resp.data.main.temp;
}



module.exports = {
    getClima
}