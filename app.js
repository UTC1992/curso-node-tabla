const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
//const colors = require('colors');
require('colors');


console.clear();

// console.log(process.argv);
//console.log(argv); 

// const [ , , arg3 = 'base=5'  ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

crearArchivo(argv.b, argv.l, argv.h)
  .then(fileName => console.log( fileName.rainbow , 'creado'))
  .catch(error => console.log(error));

