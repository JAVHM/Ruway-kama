
const db = require('../sequelize/models')

// const getTorneoPorNombre=async(nombre)=>{
//     const ts = await db.Torneo.findAll();
//     if(nombre==null||nombre==""){
//         await getTorneos(5,1);
//     }else{
//         const tEncontrado= await db.Torneo.findAll({
//             where:{
//                 nombre:nombre
//             }
//         });
        
//         return tEncontrado;
//     }
// }
const getTorneos = async (perPage,page) => {
    
    const ts = await db.Torneo.findAndCountAll({
        limit:perPage,
        offset:((perPage*page)-perPage)
    });
    const current=page;
    const pages=Math.ceil(ts.count/perPage);
    
    //console.log(ts);
    
    const torneos = []
    for (let t of ts.rows) {
        torneos.push({
            id : t.id,
            nombre : t.nombre,
            estado : t.estado,
            f_ini : t.f_ini,
            f_fin : t.f_fin,
            descripcion : t.descripcion,
            cantMax : t.cantMax,
            tipoTorneo : t.tipoTorneo,
            idJuego : t.idJuego,
            partidasDia : t.partidasDia,
            puntosPartGanada : t.puntosPartGanada,
            puntosPartEmpatada : t.puntosPartEmpatada,
            puntosPartPerdida : t.puntosPartPerdida
        })
    }
    // //console.log(torneos);
    // //console.log(current);
    // //console.log(pages);
    return {torneos, pages, current};
}


const getTorneo = async (tId) => {
    const t = await db.Torneo.findOne({
        where : {
            id : tId
        }
    })
    //console.log('Datos de torneo extraido: ', t)
    return t;
}
const getTorneoPorNombre = async (name) => {
    const torneos = []
    const t= await db.Torneo.findOne({
        where : {
            nombre : name
        }
    })
        torneos.push({
            id : t.id,
            nombre : t.nombre,
            estado : t.estado,
            f_ini : t.f_ini,
            f_fin : t.f_fin,
            descripcion : t.descripcion,
            cantMax : t.cantMax,
            tipoTorneo : t.tipoTorneo,
            idJuego : t.idJuego,
            partidasDia : t.partidasDia,
            puntosPartGanada : t.puntosPartGanada,
            puntosPartEmpatada : t.puntosPartEmpatada,
            puntosPartPerdida : t.puntosPartPerdida
        })
    

    //console.log('Datos de torneo extraido: ', torneoT)
    return torneos;
}

const getTorneoFiltro=async(filtro,perPage,page)=>{
    
    //console.log(filtro);
    
    const torneosF=[]
    const torneos= await db.Torneo.findAndCountAll({
        limit:perPage,
        offset:((perPage*page)-perPage),
        where:{
            estado:filtro
        }
    });
    const current=page;
    const pages=Math.ceil(torneos.count/perPage);
    //console.log(torneos);
    
    for (let t of torneos.rows) {
        torneosF.push({
            id : t.id,
            nombre : t.nombre,
            estado : t.estado,
            f_ini : t.f_ini,
            f_fin : t.f_fin,
            descripcion : t.descripcion,
            cantMax : t.cantMax,
            tipoTorneo : t.tipoTorneo,
            idJuego : t.idJuego
        })
    }
    return {torneosF,pages, current};


    
} 
const getTorneoFiltro2=async(filtro,perPage,page)=>{
    
    //console.log(filtro);
    
    const torneosF=[]
    const torneos= await db.Torneo.findAndCountAll({
        limit:perPage,
        offset:((perPage*page)-perPage),
        where:{
            estado:filtro
        }
    });
    const current=page;
    const pages=Math.ceil(torneos.count/perPage);
    //console.log(torneos);
    
    for (let t of torneos.rows) {
        torneosF.push({
            id : t.id,
            nombre : t.nombre,
            estado : t.estado,
            f_ini : t.f_ini,
            f_fin : t.f_fin,
            descripcion : t.descripcion,
            cantMax : t.cantMax,
            tipoTorneo : t.tipoTorneo,
            idJuego : t.idJuego
        })
    }
    return {torneosF,pages, current};


    
}   

const updateTorneo = async (t) =>{
    const tAEditar = await getTorneo(t.id)
    tAEditar.nombre = t.nombre
    tAEditar.f_ini = t.f_ini
    tAEditar.f_fin = t.f_fin
    tAEditar.descripcion = t.descripcion
    tAEditar.estado = t.estado
    tAEditar.partidasDia = t.partidasDia
    tAEditar.puntosPartGanada = t.puntosPartGanada
    tAEditar.puntosPartEmpatada = t.puntosPartEmpatada
    tAEditar.puntosPartPerdida = t.puntosPartPerdida
    await tAEditar.save()

    return true
}

const createTorneo = async (t) => {
    return await db.Torneo.create(t)
}
const verificarTorneoNombre=async(nombre)=>{
    const listaTorneo= await db.Torneo.findOne({
        where:{
            nombre:nombre
        }
    })
    if(listaTorneo==null){
        //No existe Torneo con ese nombre (keySensitive)
        return false
    }else{
        //Nombre no nulo, nombre existe 
        return true
    }
}

const addEquipo_toTorneo=async(uId, torneo)=>{
    //id de un Lider: 3
    console.log("Líder del partido ID: ", uId)
    const equipo= await db.Equipo.findOne({
        where:{
            idParticipanteLider:uId
        }
    })
    const T_E = await db.Torneo_Equipo.findOne({
        where:{
            id_e:equipo.id,
            id_t:torneo.id
        }
    })
    console.log(T_E)
    if(T_E == null){
        console.log("El equipo es: ", equipo.nombre)
        console.log("El id torneo es: ", torneo.id)
        const torneo_equipo = {
            id_e: equipo.id,
            id_t: parseInt(torneo.id),
            inscrito : true};
        console.log("El torneo_equipo: ", torneo_equipo)
        return await db.Torneo_Equipo.create(torneo_equipo)
    }else{
        console.log("Ya está inscrito")
        return 0
    }
}
module.exports = {
    getTorneos : getTorneos,
    getTorneo : getTorneo,
    updateTorneo : updateTorneo,
    createTorneo : createTorneo,
    verificarTorneoNombre: verificarTorneoNombre,
    getTorneoFiltro:getTorneoFiltro,
    getTorneoPorNombre:getTorneoPorNombre,
    addEquipo_toTorneo:addEquipo_toTorneo
};