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
 * Se creo un commit de la aplicacion en git
 * Usando los comandos git init, luego antes de cada commit se ejecuta
 * git add . , y para hacer el commit git commit -m "El nombre que le quiera
 * poner al commit"
 * Para volver a la version hecha en el commit por algun archivo borrado o codigo
 * se usa git checkout -- . 
 * A los modulos de node no se les hace un backup porque se pueden recuperar 
 * con una actualizacion, al igual que archivos que se reemplacen facilmente
 * Con estos comandos se agrego el proyecto a github
 * git remote add origin https://github.com/qnderson10/curso_node_tabla.git
    git branch -M main
    git push -u origin main
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

























