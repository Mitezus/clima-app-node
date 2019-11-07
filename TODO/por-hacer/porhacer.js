const fs = require('fs');



let listadoPorHacer = [];

const saveDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer)

    saveDB();

    return porHacer;
}

module.exports = {
    crear
}