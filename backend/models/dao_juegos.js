const data = {
    juegos : [
        {id: 1, nombre: "Juego 1", descripciom : "Descripción 1"},
        {id: 2, nombre: "Juego 2", descripciom : "Descripción 2"},
        {id: 3, nombre: "Juego 3", descripciom : "Descripción 3"},
    ],
}

//const db = require('../sequelize/models')

const getJuegos = () => {
    return data.juegos;
}

const getJuego = async (jId) => {
    const j = await data.juegos.find(juego => juego.id == jId)
    return j;
}

module.exports = {
    getJuegos : getJuegos,
    getJuego : getJuego};