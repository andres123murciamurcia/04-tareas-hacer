const { Tarea } = require("./Tarea");

class Tareas {
    //este listado pa tener muchas tareas , se va manejar como un objeto
    listado = {}

    constructor() {
        this.listado = {}
    }

    get lista() {
        const lista = [];
        //retorna un arreglo con todas las llaves de ese objeto y el foreach recorre para guardar el la lista
        Object.keys(this.listado).forEach(key => {
            const tarea = this.listado[key];

            lista.push(tarea);
        })
        return lista;
    }

    crearTareas(desc = '') {
        const tarea = new Tarea(desc);
        this.listado[tarea.id] = tarea
    }



    cargarTareasFromArray(tareas = []) {


        tareas.forEach(tarea => {
            this.listado[tarea.id] = tarea;
        })


    }


    listarTareas() {

        this.lista.forEach((tarea, index) => {
            //se le suma 1 al arreglo paea que no de 0
            const i = `${ index + 1 }`.blue;
            // se hace una desestructuracion
            const { desc, terminada } = tarea;
            //condion si la tarea esta pendiente o no , SE USA UN TERNARIO
            const estado = (terminada) ?
                'completada'.green :
                'pendiente'.red;

            console.log(`${i} ${desc} ${estado}`)

        });

    }


    listarPendientesCompletadas(completadas = true) {
        var acumulador1 = 0
        var acumulador2 = 0
        this.lista.forEach((tarea, index) => {
            //se le suma 1 al arreglo paea que no de 0
            const i = `${ index + 1 }`.blue;
            // se hace una desestructuracion
            const { desc, terminada } = tarea;
            //condion si la tarea esta pendiente o no , SE USA UN TERNARIO
            const estado = (terminada) ?
                'completada'.green :
                'pendiente'.red;
            if (completadas === false & terminada === null) {

                acumulador1 = acumulador1 + 1
                    // me muestra las no terminadas
                console.log(`${acumulador1} ${desc} ${estado}`)
            } else {
                if (completadas === true & terminada != null) {
                    acumulador2 = acumulador2 + 1
                    console.log(`${acumulador2} ${desc} ${terminada.green}`)
                }
            }
        });

    }



    borrarTarea(id = '') {
        if (this.listado[id]) {
            delete this.listado[id];
        }

    }

    //significa para pasar de no completado a completado
    toggleCompletada(ids = []) {
        ids.forEach(id => {
            const tarea = this.listado[id];
            if (!tarea.terminada) {
                //nos da el la fecha del registro
                tarea.terminada = new Date().toDateString()
            }

        });

        this.lista.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                this.listado[tarea.id].terminada = null;

            }
        })


    }



}

module.exports = {
    Tareas
}
module.exports = {
    Tareas
}