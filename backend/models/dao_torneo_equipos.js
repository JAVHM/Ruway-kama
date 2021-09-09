const db = require("../sequelize/models");
const { getEquipo,getIntegranteEquipo } = require("./dao_equipos");


const dao = {
    getTorneo_Equipos : async () => {
        const tes = await db.Torneo_Equipo.findAll();
        const Torneo_equipos = []
        for (let te of tes) {
            Torneo_equipos.push({
                id : te.id,
                //id_e : await te.getCategory(),
                id_e : await db.Equipo.findOne({
                    where : {
                        id : te.id_e
                    }
                }),
                //id_t : await te.getCategory(),
                id_t : await db.Torneo.findOne({
                    where : {
                        id : te.id_t
                    }
                }),
                inscrito : te.inscrito
            })
        }
        //console.log(Torneo_equipos);
        return Torneo_equipos;
    },
    //a
    getTorneo_Equipos_ByTorneo : async (torneo) => {
        //console.log("getTorneo_Equipos_ByTorneo: ", torneo)
        const tes = await db.Torneo_Equipo.findAll({
            where : {
                id_t : torneo.id
            }
        });
        const Torneo_equipos = []
        for (let te of tes) {
            const lIntegrante = await getIntegranteEquipo(te.id_e)
            Torneo_equipos.push({
                id : te.id,
                //id_e : await te.getCategory(),
                id_e : await db.Equipo.findOne({
                    where : {
                        id : te.id_e
                    }
                }),
                integrantes : lIntegrante,
                //id_t : await te.getCategory(),
                id_t : await db.Torneo.findOne({
                    where : {
                        id : te.id_t
                    }
                }),
                inscrito : te.inscrito
            })
        }
        //console.log(Torneo_equipos);
        return Torneo_equipos;
    },
    getTorneo_Equipos_ByLiderId :async(idParticipantelider)=>{
        const idEquipo = await getEquipo(idParticipantelider)
        const miListaTorneos = await db.Torneo_Equipo.findAll({
            where: {
                id_e: idEquipo
            }
        })
        return miListaTorneos
    }
    ,getNumParticipante_Torneo_equipo : async ()=>{
        const numEquipoPorTorneo = await db.Torneo_Equipo.count({
            attributes: ['id_t'],
            count: 'id',
            group: 'id_t',
            distinc:false,
        })
        const lista=[]
        for (let i in numEquipoPorTorneo){
            lista.push({
                id_t : i.id_t,
                count: i.count
            })
        }
        //console.log("num " , numEquipoPorTorneo)
        //console.log("Todo en  " , lista)
        return numEquipoPorTorneo
    },getTorneoInscripcion:async(uId,listaTorneo)=>{
        console.log(uId);
        //console.log(listaTorneo);
        const equipo= await db.Equipo.findOne({
            where:{
                idParticipanteLider:uId
            }
        })
        const te=[];
        console.log("equipo: ",equipo.id)
        //console.log("torneo: ",listaTorneo)
        for(let t in listaTorneo){   
            //console.log("equipo.id: ", equipo.id)
            //console.log("parseInt(t): ", parseInt(t))
            let temp = await db.Torneo_Equipo.findOne({
                where:{ 
                    id_e:equipo.id,
                    id_t:parseInt(t)+1
                }
            })
            let temp2 = false

            if(temp == null){
                temp2 = false
            }else{
                temp2 = true
            }

            //console.log("temp: ",temp)
            //console.log("temp id: ", temp.id)
            te.push({
                id_e:equipo.id,
                id_t:parseInt(t)+1,
                inscrito: temp2
            })
        }
        console.log("te: ",te)
        console.log("torneoEquipo final: ",te);
        return te
    }
}

module.exports = dao;
