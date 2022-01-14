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
                name: `${ '3.'.green }tareas completadas `
            },
            {
                value: '4',
                name: `${ '4.'.green }listar tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5.'.green }completar tarea`
            }, {
                value: '6',
                name: `${ '6.'.green }borrar tarea`
            },
            {
                value: '0',
                name: `${ '0.'.green }salir `
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






const listarTareasBorrar = async(tareas = []) => {

    const choices = tareas.map((tarea, idx) => {

        const i = `${idx + 1} `.green
            //se hace que cada parte del arreglo quede con esas propiedades en este caso con value y name
        return {
            value: tarea.id,
            name: `${i} ${tarea.desc}`
        }
    });
    //unshift es para que se agregue al inicio del arreglo
    choices.unshift({
        value: '0',
        name: '0 '.green + 'cancelar'
    })


    const preguntas = [{
        type: 'list',
        name: 'id',
        message: 'borrar',
        choices
    }]
    const { id } = await inquirer.prompt(preguntas);
    // console.log(choices)
    return id

}


//retorna falso o verdadero dependiento si el usuario le da y p n esto ya esta implementado en node js
const confirmar = async(mensaje) => {
    const question = [{
        type: 'confirm',
        name: 'ok',
        mensaje
    }]
    const { ok } = await inquirer.prompt(question);
    return ok
}







const mostrarListadoChecklist = async(tareas = []) => {

    const choices = tareas.map((tarea, idx) => {

        const i = `${idx + 1} `.green
            //se hace que cada parte del arreglo quede con esas propiedades en este caso con value y name
        return {
            value: tarea.id,
            name: `${i} ${tarea.desc}`,
            checked: (tarea.terminada) ? true : false
        }
    });



    const pregunta = [{
        type: 'checkbox',
        name: 'ids',
        message: 'seleccione',
        choices
    }]
    const { ids } = await inquirer.prompt(pregunta);

    return ids

}





module.exports = {

    inquierMenu,
    pausa,
    leerInput,
    listarTareasBorrar,
    confirmar,
    mostrarListadoChecklist

}