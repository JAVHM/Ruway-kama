const db = require("../sequelize/models");


const dao = {
    getTorneo_Partidas : async () => {
        const tes = await db.Torneo_Partida.findAll();
        const Torneo_partidas = []
        for (let te of tes) {
            Torneo_partidas.push({
                id : te.id,
                //id_p : await te.getCategory(),
                id_p : await db.Partido.findOne({
                    where : {
                        id : te.id_p
                    }
                }),
                ordenRonda : tp.ordenRonda,
                //id_t : await te.getCategory(),
                id_t : await db.Torneo.findOne({
                    where : {
                        id : te.id_t
                    }
                }),
                id_e1 : await db.Equipo.findOne({
                    where : {
                        id : tp.id_e1
                    }
                }),
                id_e2 : await db.Equipo.findOne({
                    where : {
                        id : tp.id_e2
                    }
                })
            })
        }
        //console.log(Torneo_partidas);
        return Torneo_partidas;
    },
    getTorneo_Partidas_ByTorneo : async (torneo) => {
        //console.log("getTorneo_Partidas_ByTorneo: ", torneo)
        const tps = await db.Torneo_Partida.findAll({
            where : {
                id_t : torneo.id
            }
        });
        const Torneo_partidas = []
        for (let tp of tps) {
            Torneo_partidas.push({
                id : tp.id,
                //id_p : await te.getCategory(),
                id_p : await db.Partido.findOne({
                    where : {
                        id : tp.id_p
                    }
                }),
                ordenRonda : tp.ordenRonda,
                //id_t : await te.getCategory(),
                id_t : await db.Torneo.findOne({
                    where : {
                        id : tp.id_t
                    }
                }),
                id_e1 : await db.Equipo.findOne({
                    where : {
                        id : tp.id_e1
                    }
                }),
                id_e2 : await db.Equipo.findOne({
                    where : {
                        id : tp.id_e2
                    }
                })
            })
        }
        //console.log(Torneo_partidas);
        return Torneo_partidas;
    }
}

module.exports = dao;