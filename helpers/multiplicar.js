const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
  
  try { 

    let salida = '';
    let salidaConsola = '';
    for (let i = 1; i <= hasta; i++) {
      // console.log(`${base} x ${i} = ${ ( 5 * i ) }`)
      salida += `${base} x ${i} = ${ ( base * i ) }\n`;
      salidaConsola += `${ base.toString().cyan } ${`x`.white} ${ i.toString().magenta } ${`=`.green} ${ ( base * i ).toString().blue } \n`;
    }

    if ( listar ) {
      console.log('====================='.rainbow);
      console.log(`Tabla del`.cyan, base.toString().brightBlue);
      console.log('====================='.rainbow);
      console.log(salidaConsola);
    }

    await fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
    return `tabla-${ base }.txt`;
  } catch (error) {
    throw error;    
  }
}

module.exports = {
  crearArchivo
}