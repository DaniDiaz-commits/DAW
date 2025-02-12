import { readFile } from 'node:fs';
// const fs = require('node:fs');

console.log('Leyendo el primer archivo...')
readFile('./text.txt', 'utf-8', (err, text) => { // <---- ejecutas este callback
    if(err) return;
    console.log('Texto:', text)
})