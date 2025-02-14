import { readFile, writeFile } from 'node:fs';

export function crearText(texto) {
    writeFile("./text.txt", texto,  function (err) {
        if (err) { return console.log(err); }
        console.log("The file was saved!");
    })
}

export function leer() {
    console.log('Leyendo el archivo...')
    readFile('./text.txt', 'utf-8', (err, text) => {
        if(err) return;
        console.log('🫡 🫡 🫡 🫡 🫡 🫡  Leyendo el archivo...\n');
        console.log('Texto:', text)
    })
}

