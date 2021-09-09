const data = {
    torneos : [
        {id: 1, nombre : "Torneo 1", estado : "Por empeazar", 
        f_ini : 45, f_ini : 45,f_fin : 45, descripcion : "Lorem ipsum dolor", 
        cantMax : 45, idJuego : 45, idTipo : 45},
        {id: 2, nombre : "Torneo 2", estado : "Activo", 
        f_ini : 45, f_ini : 45,f_fin : 45, descripcion : "Lorem ipsum dolor", 
        cantMax : 45, idJuego : 45, idTipo : 45},
        {id: 3, nombre : "Torneo 3", estado : "Acabado", 
        f_ini : 45, f_ini : 45,f_fin : 45, descripcion : "Lorem ipsum dolor", 
        cantMax : 45, idJuego : 45, idTipo : 45},
    ],
}

const getTorneos = () => {
    return data.torneos;
}

const getTorneo = async (tId) => {
    const t = await data.torneos.find(torneo => torneo.id == tId)
    return t;
}

module.exports = {
    getTorneos : getTorneos,
    getTorneo : getTorneo};