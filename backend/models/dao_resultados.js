const data = { 
    //Actual
    /*Partidos : [
        {id: 1, h_ini : 1, h_fin : 2,
            idEquip1: 1, nombreEqup1: "Equipo 1", Puntaje: 1,
            idEquip2: 2, nombreEqup2: "Equipo 2", Puntaje: 2,},
    ],*/
    //Cambio
    resultados : [
        {id : 1, idEquipo : 1, idPartido : 1, puntaje : 1},
        {id : 2, idEquipo : 2, idPartido : 2, puntaje : 2},
        {id : 3, idEquipo : 3, idPartido : 3, puntaje : 4},
        {id : 4, idEquipo : 4, idPartido : 4, puntaje : 3}
    ],
}

const getResultados = () => {
    return data.resultados;
}

const getResultado = async (rId) => {
    const r = await data.resultados.find(resultado => resultado.id == rId)
    return r;
}

module.exports = {
    getResultados : getResultados,
    getResultado : getResultado};