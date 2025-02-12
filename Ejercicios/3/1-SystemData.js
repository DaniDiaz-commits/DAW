import os from 'node:os'

console.log('Información del sistema operativo:')
console.log('--------------------')

console.log('Nombre del sistema operativo: ', os.platform())
console.log('Versión del sistema operativo: ', os.release())
console.log('Memoria libre en MB: ', os.freemem() / 1024 / 1024)
console.log('CPUs', os.cpus())
