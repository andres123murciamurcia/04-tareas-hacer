//   const fs = require('fs'),
const fs = require('fs')
const archivo = './bd/datos.json';

const guardar = (data) => {

    // JSON.STRINGGIFY transforma ese arreglo data en un string o json
    fs.writeFileSync(archivo, JSON.stringify(data))

}

const leer = () => {

    if (!fs.existsSync(archivo)) {
        return null
    }
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' })
        // esto convierte de un string
    const data = JSON.parse(info)
    console.log(data)

    return null
}
module.exports = {

    guardar,
    leer

}