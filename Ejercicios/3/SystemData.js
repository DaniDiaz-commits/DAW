import os from 'node:os'

export function info() {
    console.log('Información del sistema operativo:')
    console.log('--------------------')

    console.log('Nombre del sistema operativo: ', os.platform())
    console.log('Versión del sistema operativo: ', os.release())
    console.log('Memoria libre en MB: ', (os.freemem() / 1024 / 1024).toFixed(2))
    console.log('CPUs', os.cpus().length)

    const message = 'Información del sistema operativo:' + '\n' + '--------------------' + '\n' + 'Nombre del sistema operativo: ' + os.platform() + '\n' + 'Versión del sistema operativo: ' + os.release() + '\n' + 'Memoria libre en MB: ' + (os.freemem() / 1024 / 1024).toFixed(2) + '\n' + 'CPUs: ' + os.cpus().length
    return message;
}
