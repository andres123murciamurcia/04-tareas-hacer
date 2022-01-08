const { resolve } = require('path');

require('colors')
console.clear();
const mostrarMenu = () => {

    return new Promise(resolve => {


        console.log(`${'1.'.red}crear tarea`);
        console.log(`${'2.'.red}listar tareas`);
        console.log(`${'3.'.red}listar tareas completadas`);
        console.log(`${'4.'.red}listar tareas pensientes`);
        console.log(`${'5.'.red}completar tarea`);
        console.log(`${'6.'.red}borrar tarea`);
        console.log(`${'0.'.red}salir`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('seleccione una opcion : ', (opt) => {
            resolve(opt);
            readline.close();
        })

    })



}



const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('presione ENTER para continuar : ', (opt) => {
            resolve();
            readline.close();
        })
    })

}


module.exports = {
    mostrarMenu,
    pausa

}