import os from 'node:os'
import { readFile, writeFile } from 'node:fs';

function info() {
    // console.log('Información del sistema operativo:')
    // console.log('--------------------')
    // console.log('Nombre del sistema operativo: ', os.platform())
    // console.log('Versión del sistema operativo: ', os.release())
    // console.log('Memoria libre en MB: ', os.freemem() / 1024 / 1024)
    // console.log('CPUs', os.cpus())
    
    const message = `Información del sistema operativo:
--------------------
Nombre del sistema operativo:  ${os.platform()}
Versión del sistema operativo:  ${os.release()}
Memoria libre en MB: ${os.freemem() / 1024 / 1024}
CPUs:  ${os.cpus().length}`;
return message
}

let texto = info();
let url = "./3/text.txt";
write(url);
function write(url) {
    writeFile(url, texto,  function (err) {
        if (err) { return console.log(err); }
        console.log("The file was saved!");
        read(url);
    })
}

function read(url) {
    readFile(url, 'utf-8', (err, text) => { // <---- ejecutas este callback
        if(err) return;
        console.log('Texto:', text)
    })
}