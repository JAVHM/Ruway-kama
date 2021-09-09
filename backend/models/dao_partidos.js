/*const data = { 
    //Actual
    Partidos : [
        {id: 1, h_ini : 1, h_fin : 2,
            idEquip1: 1, nombreEqup1: "Equipo 1", Puntaje: 1,
            idEquip2: 2, nombreEqup2: "Equipo 2", Puntaje: 2,},
    ],
    //Cambio
    partidos :[
        {id : 1, idTorneo : "ID torneo", idEquip1 : "ID del equipo 1", idEquip2 : "ID del equipo 2", fecha : 1, h_ini : 1, h_fin : 2},
        {id : 2, idTorneo : "ID torneo", idEquip1 : "ID del equipo 1", idEquip2 : "ID del equipo 2", fecha : 1, h_ini : 1, h_fin : 2},
        {id : 3, idTorneo : "ID torneo", idEquip1 : "ID del equipo 1", idEquip2 : "ID del equipo 2", fecha : 1, h_ini : 1, h_fin : 2},
        {id : 4, idTorneo : "ID torneo", idEquip1 : "ID del equipo 1", idEquip2 : "ID del equipo 2", fecha : 1, h_ini : 1, h_fin : 2}
    ]
}*/

const db = require('../sequelize/models');
const { getEquipoNombre } = require('./dao_equipos');

const getPartidos = async (rId) => {
    //Encuentra todas las rondas con el ID del torneo elegido
    //console.log("ID de la ronda: " , rId)
    const ps = await db.Partido.findAll({
        where : {
            idRonda : rId
        }
    });
    //console.log("Rondas extraidas: " , rs)
    const partidos = []
    //Almacenalas en el arreglo rondas
    for (let p of ps){
        partidos.push({
            id : p.id,
            id_e1 : await db.Equipo.findOne({
                where : {
                    id : p.id_e1
                }
            }),
            id_e2 : await db.Equipo.findOne({
                where : {
                    id : p.id_e2
                }
            }),
            idRonda : await db.Ronda.findOne({
                where : {
                    id : p.idRonda
                }
            }),
            fecha : p.fecha,
            h_ini : p.h_ini,
            h_fin : p.h_fin,
            ganador: p.ganador
        })
    }
    //console.log("Partidos push: ", partidos);
    return partidos
}

const getPartidosRondas = async (rondas) => {
    //Encuentra todas las rondas con el ID del torneo elegido
    rondas.forEach(element => {
        //console.log("ID de las rondas: " , rId)
    });
    
    const ps = await db.Partido.findAll({
        where : {
            idRonda : rId
        }
    });
    //console.log("Rondas extraidas: " , rs)
    const partidos = []
    //Almacenalas en el arreglo rondas
    for (let p of ps){
        partidos.push({
            id : p.id,
            id_e1 : await db.Equipo.findOne({
                where : {
                    id : p.id_e1
                }
            }),
            id_e2 : await db.Equipo.findOne({
                where : {
                    id : p.id_e2
                }
            }),
            idRonda : await db.Ronda.findOne({
                where : {
                    id : p.idRonda
                }
            }),
            fecha : p.fecha,
            h_ini : p.h_ini,
            h_fin : p.h_fin,
            ganador: p.ganador
        })
    }
    //console.log("Partidos push: ", partidos);
    return partidos
}

const getPartido = async (pId) => {
    const p = await db.Partido.findOne({
        where : {
            id : pId
        }
    })
    return p;
}

const crearPartido = async (partido) => {
    //console.log('Partido creado ', partido)
    return await db.Partido.create(partido)
}

const updatePartidoGanador = async (partidoID, ganador) => {
    console.log('PartidoID:', partidoID, '  GanadorID: ', ganador)
    const pEdit = await getPartido(partidoID)
    pEdit.ganador = await  getEquipoNombre(ganador)
    await pEdit.save()
    return true
}

const generarPartidosTCT = async (listaPartidos, ronda, repeticiones) => {
    //console.log(listaPartidos)
    const partidos = []
    for (let l of listaPartidos){
        partidos.push(l.id_e.id)
    }
    //console.log("partidos: ", partidos)
    //console.log(listaPartidos)
    TCT(partidos,ronda,repeticiones)
    /*for (var i = 0; i < listaPartidos.length; i++) {
        for (var j = 0; j < listaPartidos.length-(i+1); j++) {
            //console.log('Generar Partido entre :', listaPartidos[i].id_e.id, ' y ', listaPartidos[listaPartidos.length-(j+1)].id_e.id)
            const partido = {
                id_e1 : listaPartidos[i].id_e.id,
                id_e2 : listaPartidos[listaPartidos.length-(j+1)].id_e.id,
                idRonda : r.id,
                fecha : r.f_ini
            }
            //await crearPartido(partido)FUNCIONA
        }
    }*/
}
const TCT = async (players2, ronda, repeticiones) => {
    let players = []
    if (players.length % 2 == 1) {
      let valorAElmininar = Math.floor((Math.random() * (players2.length - 1)) +1);//0 a X - 1 y luego + 1 para que sea de 1 a X
      //console.log('Valor eliminado: ', players2[valorAElmininar])
      players2.splice(valorAElmininar,1)
      players = players2
    }else{
        players = players2
    }
    const playerCount = players.length;
    const rounds = repeticiones;//OJO
    const half = playerCount / 2;
  
    const tournamentPairings = [];
  
    const playerIndexes = players.map((_, i) => i).slice(1);
  
    const roundPairings = [];
    for (let round = 0; round < rounds; round++) {
      
  
      const newPlayerIndexes = [0].concat(playerIndexes);
  
      const firstHalf = newPlayerIndexes.slice(0, half);
      const secondHalf = newPlayerIndexes.slice(half, playerCount).reverse();
  
      for (let i = 0; i < firstHalf.length; i++) {
        roundPairings.push({
            id_e1: players[firstHalf[i]],
            id_e2: players[secondHalf[i]],
            idRonda : ronda.id,
            fecha : ronda.f_ini
        });
      }
  
      // rotating the array
      playerIndexes.push(playerIndexes.shift());
    }
    roundPairings.forEach(element => crearPartido(element));
    //console.log("...: ", roundPairings)
    return tournamentPairings;
  }
module.exports = {
    getPartidos : getPartidos,
    getPartido : getPartido,
    crearPartido : crearPartido,
    updatePartidoGanador : updatePartidoGanador,
    generarPartidosTCT : generarPartidosTCT};