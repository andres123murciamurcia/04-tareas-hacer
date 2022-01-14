// const { mostrarMenu, pausa } = require('./helpers/mensajes');

const { guardar, leer } = require('./helpers/guardarArchivo');
const { inquierMenu, pausa, leerInput, listarTareasBorrar, confirmar, mostrarListadoChecklist } = require('./helpers/inquiar');
const { Tarea } = require('./models/Tarea');
// const { Tarea } = require('./models/Tarea');
const { Tareas } = require('./models/Tareas');




require('colors')


console.clear();

const main = async() => {
    let opt = ''

    const tareas = new Tareas();


    const tareasDb = leer();


    if (tareasDb) {
        tareas.cargarTareasFromArray(tareasDb);
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
                // console.log(tareas.lista)
                tareas.listarTareas();
                // console.log(tareas.lista)
                break;

            case '3':
                completadas = true
                tareas.listarPendientesCompletadas(completadas);
                break;

            case '4':
                completadas = false
                tareas.listarPendientesCompletadas(completadas);
                break;

            case '5':

                const ids = await mostrarListadoChecklist(tareas.lista)
                tareas.toggleCompletada(ids)
                break;

            case '6':
                const id = await listarTareasBorrar(tareas.lista);
                if (id !== '0') {
                    const borrarSINO = await confirmar('esta seguro?')
                    if (borrarSINO) {
                        tareas.borrarTarea(id);
                        console.log('tareas borrada'.red)
                    }

                }

                break;
        }

        guardar(tareas.lista);



        await pausa();

    }
    while (opt != 0)



}

main()