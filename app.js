/**
 * Se le pone app.js o index.js al archivo principal
 * se creo la funcion de multiplicar en otro archivo y se importo aca
 * se creo la forma de recibir la base que se usara para multiplicar
 * mediante la terminal con un comando
 * Se creo el package.json desde la termina con npm init
 * luego se le dieron los valores correspondiente
 * En la parte de test se creo un script el cual ejecutaba la base 15 
 * llamado base15, que se ejecuta con npm run base15
 * Usando yargs podemos recibir comandos desde la terminal usando banderas mucho mas facil
 * Usando yargs creamos banderas para pasar el valor de multiplicacion
 * y listarlo, configurandolo con sus valores y opciones
 * Luego se paso todo lo de yargs a su propio archivo y se importo aca
 * Se creo una bandera h en yargs para poner limite a los multiplos a mostrar
 * 
 */

// tabla del 5 en consola y guardarla en un archivo


// import { writeFileSync } from 'fs';
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('./config/colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado`.underline.green))
    .catch(e => console.log(e));

// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.base);

// console.log(process.argv);

// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base)


// const base = 1;

























