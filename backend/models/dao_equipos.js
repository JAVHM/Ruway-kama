const db = require("../sequelize/models");
/*
const data = {
    equipos: [
        { id: 1, nombre: "Equipo 1", f_cr: 23, idLider: 1 },
        { id: 2, nombre: "Equipo 2", f_cr: 24, idLider: 2 },
        { id: 3, nombre: "Equipo 3", f_cr: 25, idLider: 3 },
        { id: 4, nombre: "Equipo 4", f_cr: 26, idLider: 4 },
    ],
}*/

const getEquipos = async () => {
    const listaEquipo = await db.Equipo.findAll();
    return listaEquipo;
}

const getEquipo = async (eId) => {
    const equipo = await db.Equipo.findOne({
        where: {
            id: eId
        }
    })
    return equipo;
}

const getEquipoNombre = async (eId) => {
    const equipo = await db.Equipo.findOne({
        where: {
            id: eId
        }
    })
    return equipo.nombre;
}

const createEquipo = async (equipo) => {
    return await db.Equipo.create(equipo);
}

const getEquipoPorLider = async (lId) => {
    const equipo = await db.Equipo.findOne({
        where: {
            idParticipanteLider: lId
        }
    })

    return equipo;
}

const editEquipo = async (equipo) => {
    const equipoEditar = await getEquipo(equipo.id)
    equipoEditar.nombre = equipo.nombre
    equipoEditar.listaParticipantes = equipo.listaParticipantes

    await equipoEditar.save()

    return true
}
const buscarNombreEquipo= async( equipo)=>{
    const lEquipos = await db.Equipo.findOne({
        where:{
            nombre: equipo
        }
    })
    if(lEquipos==null){
        //No existe
        return true
    }else{
        //Existe nombre
        return false
    }
}
const getIntegranteEquipo= async( EId)=>{
    const lEquipos = await db.Equipo.findOne({
        where:{
            id: EId
        }
    })
    if(lEquipos==null){
        return ' '
    }else{
        const integrantes = lEquipos.listaParticipantes
        return integrantes
    }
}
module.exports = {
    getEquipos: getEquipos,
    getEquipo: getEquipo,
    createEquipo: createEquipo,
    getEquipoPorLider: getEquipoPorLider,
    editEquipo: editEquipo,
    buscarNombreEquipo:buscarNombreEquipo,
    getEquipoNombre,getEquipoNombre,
    getIntegranteEquipo:getIntegranteEquipo,
};