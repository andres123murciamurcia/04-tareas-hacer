const { v4: uuidv4 } = require('uuid')

class Tarea {
    id = '';
    desc = '';
    terminada = null

    constructor(desc) {
        //para crear un numero aleatorio unico
        this.id = uuidv4();
        this.desc = desc;

    }

}

module.exports = {

    Tarea,

}