import { createInterface } from 'node:readline';
import chalk from 'chalk';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

let nombre, edad;

rl.question("Ingrese su nombre: ", (respuesta) => {
    nombre = respuesta;
    rl.question("Ingrese su edad: ", (respuestaEdad) => {
        edad = parseInt(respuestaEdad, 10);
        
        let mensaje = `Hola ${nombre}, edad ${edad}`;
        if (edad < 18) {
            console.log(chalk.red(mensaje));
        } else if (edad < 65) {
            console.log(chalk.green(mensaje));
        } else {
            console.log(chalk.blue(mensaje));
        }
        rl.close();
    });
});
