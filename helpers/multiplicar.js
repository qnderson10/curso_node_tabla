/**
 * La funcion de crear la tabla de multiplicar se creo y se exporto
 * con la funcion module.exports la cual exporta objetos que puede contener
 * funciones, y se creo un archivo con el string que contenia toda la tabla
 * con la funcion de la libre fs llamada writeFileSync y writeFile, luego 
 * se transformo la funcion en una funcion asincrona que envia la promesa al
 * archivo principal
 */

const fs = require('fs');
const colors = require('../config/colors');

const crearArchivo = async(base = 5, listar, limite) => {
    

    // writeFile(`tabla_${j}.txt`, salida, (e) => {
    //     if(e) throw e;
    //     console.log(`Archivo tabla del ${j} creado`);
    // });
    try{
        let salida = `-------------------------\n   Tabla del ${base}\n-------------------------\n`.brightRed;
        let salida2 = `-------------------------\n   Tabla del ${base}\n-------------------------\n`;

        for(let i = 1; i <= limite; i++){
            salida += `${base} ${'x'.brightRed} ${i} ${'='.brightBlue} ${base * i}\n`;
            salida2 += `${base} x ${i} = ${base * i}\n`;
        }
        fs.writeFileSync(`./salida/tabla_${base}.txt`, salida2);
        
        if(listar === true){
            console.log(salida);
        }

        return `Archivo tabla del ${base}`;

    } catch(e){
        throw(e);
    }
   
}

module.exports = {
    crearArchivo
}







