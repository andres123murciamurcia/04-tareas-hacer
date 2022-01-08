const inquirer = require('inquirer');
const ListPrompt = require('inquirer/lib/prompts/list');
const { validate } = require('uuid');
require('colors')


const enter = [

    {
        type: 'input',
        name: 'enter',
        messaje: 'presione Enter para continuar',


    }
]


const preguntas = [

    {
        type: 'list',
        name: 'opcion',
        messaje: '¿que desea hacer ?',
        choices: [{
                value: '1',
                name: `${ '1.'.green}crear tarea`

            },
            {
                value: '2',
                name: `${'2.'.green}listar tareas`
            },
            {
                value: '3',
                name: '3.listar tareas completadas'
            },
            {
                value: '4',
                name: '4.listar tareas pendientes'
            },
            {
                value: '5',
                name: '5.completar tarea'
            }, {
                value: '6',
                name: '6.borrar tarea'
            },
            {
                value: '0',
                name: '0.salir '
            },


        ]

    }

]

const inquierMenu = async() => {

    console.clear();
    console.log('__________________'.green);
    console.log('MENU HACER TAREAS'.red);
    console.log('__________________\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion
}



const pausa = async() => {

    // console.log('presione Enter para continuar')

    await inquirer.prompt(enter);


}


const leerInput = async(message) => {

    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'ingrese algo....'
            }
            return true;
        }
    }];
    const { desc } = await inquirer.prompt(question);
    return desc

}



module.exports = {

    inquierMenu,
    pausa,
    leerInput
}