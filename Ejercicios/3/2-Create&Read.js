import fs from 'node:fs';

let texto = "¿Es un avión? ¿Es Pou? ¡No! ¡Es el Dandy de Barcelona!";
fs.writeFile("./text.txt", texto,  function (err) {
    if (err) { return console.log(err); }
    console.log("The file was saved!");
})