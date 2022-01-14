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




}

module.exports = {
    Tareas
}
module.exports = {
    Tareas
}