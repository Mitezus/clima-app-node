const axios = require('axios');

const getLugarLatLng = async (dir) => {

    const encodedUlr = encodeURI(dir);
    console.log(encodedUlr);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: {'x-rapidapi-key': 'ce029820d1msh9f921915e7f3f78p115708jsn9249f99df6f8'}
      });
    
     const resp = await instance.get();

    if ( resp.data.Results.length === 0) {
        throw new Error(`No hay de resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


      return {
          direccion,
          lat,
          lng
      }

  }

  module.exports = {
      getLugarLatLng
  }