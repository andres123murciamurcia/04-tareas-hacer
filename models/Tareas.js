const { Tarea } = require("./Tarea");

class Tareas {
    //este listado pa tener muchas tareas , se va manejar como un objeto
    listado = {}

    get lista() {
        const lista = [];
        //retorna un arreglo con todas las llaves de ese objeto y el foreach recorre para guardar el la lista
        Object.keys(this.listado).forEach(key => {
            const tarea = this.listado[key];

            lista.push(tarea);
        })
        return lista;
    }

    constructor() {
        this.listado = {}
    }

    crearTareas(desc = '') {
            const tarea = new Tarea(desc);
            this.listado[tarea.id] = tarea
        }
        // cargarTareasFromArray(tareas = []) {

    //     this.listado[tarea.id] = tarea;
    // }
}

module.exports = {
    Tareas
}