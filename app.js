// const { mostrarMenu, pausa } = require('./helpers/mensajes');

const { guardar, leer } = require('./helpers/guardarArchivo');
const { inquierMenu, pausa, leerInput } = require('./helpers/inquiar');
// const { Tarea } = require('./models/Tarea');



const Tareas = require('./models/Tareas');

require('colors')


console.clear();
const main = async() => {
    let opt = ''

    const tareas = new Tareas();
    const tareasDb = leer();

    if (tareasDb) {

    }




    do {
        //imprime el menu y retorna la opcion
        opt = await inquierMenu();

        switch (opt) {
            case '1':

                const desc = await leerInput('descripcion:');
                tareas.crearTareas(desc);
                break;

            case '2':
                // listar tareas
                console.log(tareas.lista)
                break;

            case '3':
                break;

            case '4':
                break;

            case '5':
                break;

            case '6':
                break;
        }

        // guardar(tareas.lista);



        await pausa();

    }
    while (opt != 0)
}

main()