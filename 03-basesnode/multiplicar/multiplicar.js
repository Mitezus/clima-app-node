const fs = require('fs');


let listar = (num, limite) => {

        for(i=1; i<=limite; i++) {
            console.log(`${num} * ${i} =  ${ num * i}` );
        }

};


let crearArchivo = (num, limite) => {
    return new Promise ((resolve, reject) => {

        if (!Number(num)) {
            reject(`No es un numero`);
            return;
        } 
        let data = '';
        for (i=1; i<=limite; i++) {
            data += `${num} * ${i} = ${ num * i}\n`;
        }
        
        fs.writeFile(`tabla-${num}.txt`, data, (err) => {
            if (err) 
                reject (err)
            else
                resolve(`tabla-${num}.txt`)
            
        });

    });
}

module.exports = {
    crearArchivo,
    listar
}




