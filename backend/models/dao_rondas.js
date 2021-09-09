/*const data = {
    rondas : [
        {id: 1, n_cor : 1, n_par, f_ini : 1, idTorneo : 1},
        {id: 2, n_cor : 2, n_par, f_ini : 2, idTorneo : 1},
        {id: 3, n_cor : 3, n_par, f_ini : 3, idTorneo : 1}
    ],
}*/
const db = require('../sequelize/models')

const getRondas = async (tId) => {
    //Encuentra todas las rondas con el ID del torneo elegido
    //console.log("ID del torneo: " , tId)
    const rs = await db.Ronda.findAll({
        where : {
            idTorneo : tId
        }
    });
    //console.log("Rondas extraidas: " , rs)
    const rondas = []
    //Almacenalas en el arreglo rondas
    for (let r of rs){
        rondas.push({
            id : r.id,
            nombre : r.nombre,
            n_cor : r.n_cor,
            n_par : r.n_par,
            f_ini : r.f_ini,
            idTorneo : r.idTorneo,
            estado: r.estado
        })
    }
    //console.log("Rondas push: ", rondas);
    return rondas
}

const createRonda = async (r) => {
    return await db.Ronda.create(r)
}

const getRonda = async (rId) => {
    const r = await db.Ronda.findOne({
        where : {
            id : rId
        }
    })
    return r;
}

const getRondaByTorneo = async (tId) => {
    const r = await db.Ronda.findOne({
        where : {
            idTorneo : tId
        }
    })
    return r;
}

const getOrdinales = async (listaRonda) => {
    //console.log("Lista de las rondas en el torneo", listaRonda)
    listaFechas = []

    for (ronda of listaRonda){
        //listaFechas.push(new Date(ronda.f_ini))
        listaFechas.push({id : ronda.id, fecha: new Date(ronda.f_ini)})
    }
    //console.log("Fechas extradas de las rondas: ", listaFechas)
    //Comparar
    listaFechas.sort(function (a, b) {
        var dateA = new Date(a.fecha), dateB = new Date(b.fecha)
        return dateA - dateB
    });
    console.log("Lista de fechas después del merge: ", listaFechas)
    fechasFin = []
    var i = 0;
    for (i; i < listaFechas.length; i++) {
        let contador = 1;
        mes = listaFechas[i].fecha.getMonth()
        dia = listaFechas[i].fecha.getDay()
        console.log("Mes: ", mes , "Día: ", dia)
        /*while(i < listaFechas.length){
            console.log("Entro al bucle while")
            fechasFin.push({
                pos : contador,
                fecha : listaFechas[i]
            })
            contador++
            i++
        }*/
        while(i < listaFechas.length && listaFechas[i].fecha.getMonth() == mes && listaFechas[i].fecha.getDay() == dia){
            console.log("Entro al bucle while")
            fechasFin.push({
                pos : contador,
                id : listaFechas[i].id,
                fecha : listaFechas[i].fecha
            })
            console.log("Fechas: ", listaFechas[i], "Posición: ", contador)
            contador++
            i++
        }
        i = i - 1
        console.log(i)
        //console.log(listaFechas[i])
        //console.log("Fechas Fin:",fechasFin)
    }
    console.log("Fechas Fin:",fechasFin)
    return fechasFin;
}

module.exports = {
    getRondas : getRondas,
    getRonda : getRonda,
    getRondaByTorneo : getRondaByTorneo,
    createRonda : createRonda,
    getOrdinales : getOrdinales};