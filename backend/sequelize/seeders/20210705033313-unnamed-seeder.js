'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     const bcryptjs = require('bcryptjs')
     await queryInterface.bulkInsert('Usuario',[{
      nombre : 'admin',
      correo : 'admin@gmail.com',
      clave : await bcryptjs.hash("admin", 8),
      rol : 'Administrador',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      nombre : 'organizador',
      correo : 'organizador@gmail.com',
      clave : await bcryptjs.hash("organizador", 8),
      rol : 'Organizador',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      nombre : 'Lider',
      correo : 'lider@gmail.com',
      clave : await bcryptjs.hash("lider", 8),
      rol : 'Lider',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      //Participante Lider2
      nombre : 'Lider2',
      correo : 'lider2@example.com',
      clave : await bcryptjs.hash("lider2", 8),
      rol : 'Lider',
      createdAt : new Date(),
      updatedAt : new Date()
    }])
    await queryInterface.bulkInsert('Juego', [
      {
        nombre : 'CSGO',
        descripcion : 'Videojuego de disparos en primera persona desarrollado por Valve Corporation',
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Mario kart 8 deluxe',
        descripcion : 'Videojuego de carreras',
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Valorant',
        descripcion : 'Videojuego de disparos en primera persona desarrollado por Valve Corporation',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
    //LEYENDA
    //TCT = Todos contra todos
    //Directa = Eliminacion Directa
    await queryInterface.bulkInsert('Torneo', [
      {
        nombre : 'Torneo 1',
        estado: 'Cerrado',
        f_ini: '15/05/2021',
        f_fin:'16/06/2021',
        descripcion:'Primera partida',
        cantMax: 10,
        tipoTorneo:'Directa',
        idJuego: 1,
        partidasDia : 3,
        puntosPartGanada : null,
        puntosPartEmpatada : null,
        puntosPartPerdida : null, 
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 2',
        estado: 'Abierto',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo por Julio',
        cantMax: 10,
        tipoTorneo:'TCT',
        idJuego: 2,
        partidasDia : 3,
        puntosPartGanada : 3,
        puntosPartEmpatada : 1,
        puntosPartPerdida : 0,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 3',
        estado: 'Abierto',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Julio 2',
        cantMax: 10,
        tipoTorneo:'Directa',
        idJuego: 3,
        partidasDia : 3,
        puntosPartGanada : null,
        puntosPartEmpatada : null,
        puntosPartPerdida : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 4',
        estado: 'Cerrado',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Marzo',
        cantMax: 10,
        tipoTorneo:'TCT',
        idJuego: 3,
        partidasDia : 3,
        puntosPartGanada : 3,
        puntosPartEmpatada : 1,
        puntosPartPerdida : 0,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 5',
        estado: 'Abierto',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Julio 2',
        cantMax: 10,
        tipoTorneo:'Directa',
        idJuego: 3,
        partidasDia : 3,
        puntosPartGanada : null,
        puntosPartEmpatada : null,
        puntosPartPerdida : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 6',
        estado: 'Abierto',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Julio 2',
        cantMax: 10,
        tipoTorneo:'Directa',
        idJuego: 2,
        partidasDia : 3,
        puntosPartGanada : null,
        puntosPartEmpatada : null,
        puntosPartPerdida : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 7',
        estado: 'Cerrado',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Julio 2',
        cantMax: 10,
        tipoTorneo:'Directa',
        idJuego: 2,
        partidasDia : 3,
        puntosPartGanada : null,
        puntosPartEmpatada : null,
        puntosPartPerdida : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 8',
        estado: 'Cerrado',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Julio 2',
        cantMax: 10,
        tipoTorneo:'Directa',
        idJuego: 1,
        partidasDia : 3,
        puntosPartGanada : null,
        puntosPartEmpatada : null,
        puntosPartPerdida : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 9',
        estado: 'Cerrado',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Julio 2',
        cantMax: 10,
        tipoTorneo:'TCT',
        idJuego: 3,
        partidasDia : 3,
        puntosPartGanada : 3,
        puntosPartEmpatada : 1,
        puntosPartPerdida : 0,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 10',
        estado: 'Abierto',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Julio 2',
        cantMax: 10,
        tipoTorneo:'Directa',
        idJuego: 3,
        partidasDia : 3,
        puntosPartGanada : null,
        puntosPartEmpatada : null,
        puntosPartPerdida : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 11',
        estado: 'Abierto',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Julio 2',
        cantMax: 10,
        tipoTorneo:'TCT',
        idJuego: 2,
        partidasDia : 3,
        puntosPartGanada : 3,
        puntosPartEmpatada : 1,
        puntosPartPerdida : 0,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 12',
        estado: 'Cerrado',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Julio 2',
        cantMax: 10,
        tipoTorneo:'Directa',
        idJuego: 1,
        partidasDia : 3,
        puntosPartGanada : null,
        puntosPartEmpatada : null,
        puntosPartPerdida : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 13',
        estado: 'Abierto',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Julio 2',
        cantMax: 10,
        tipoTorneo:'TCT',
        idJuego: 3,
        partidasDia : 3,
        puntosPartGanada : 3,
        puntosPartEmpatada : 1,
        puntosPartPerdida : 0,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 14',
        estado: 'Cerrado',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Julio 2',
        cantMax: 10,
        tipoTorneo:'Directa',
        idJuego: 3,
        partidasDia : 3,
        puntosPartGanada : null,
        puntosPartEmpatada : null,
        puntosPartPerdida : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 15',
        estado: 'Abierto',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Julio 2',
        cantMax: 10,
        tipoTorneo:'TCT',
        idJuego: 2,
        partidasDia : 3,
        puntosPartGanada : 3,
        puntosPartEmpatada : 1,
        puntosPartPerdida : 0,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 16',
        estado: 'Cerrado',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Julio 2',
        cantMax: 10,
        tipoTorneo:'Directa',
        idJuego: 3,
        partidasDia : 3,
        puntosPartGanada : null,
        puntosPartEmpatada : null,
        puntosPartPerdida : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 17',
        estado: 'Abierto',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Julio 2',
        cantMax: 10,
        tipoTorneo:'TCT',
        idJuego: 3,
        partidasDia : 3,
        puntosPartGanada : 3,
        puntosPartEmpatada : 1,
        puntosPartPerdida : 0,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 18',
        estado: 'Cerrado',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Julio 2',
        cantMax: 10,
        tipoTorneo:'TCT',
        idJuego: 1,
        partidasDia : 3,
        puntosPartGanada : 3,
        puntosPartEmpatada : 1,
        puntosPartPerdida : 0,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 19',
        estado: 'Cerrado',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Julio 2',
        cantMax: 10,
        tipoTorneo:'Directa',
        idJuego: 2,
        partidasDia : 3,
        puntosPartGanada : null,
        puntosPartEmpatada : null,
        puntosPartPerdida : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Torneo 20',
        estado: 'Cerrado',
        f_ini: '15/07/2021',
        f_fin:'16/07/2021',
        descripcion:'Torneo para Julio 2',
        cantMax: 10,
        tipoTorneo:'Directa',
        idJuego: 3,
        partidasDia : 3,
        puntosPartGanada : null,
        puntosPartEmpatada : null,
        puntosPartPerdida : null,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
    
    await queryInterface.bulkInsert('Torneo_Equipo', [
      {
        id_e : 1,
        id_t: 1,
        inscrito: true,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e : 2,
        id_t: 1,
        inscrito: true,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
    /*
    //De esto no estoy segura si ponerlo aca como seed 
    await queryInterface.bulkInsert('Ronda', [
      {
        n_cor : 1,
        n_par: 1,
        f_ini: '10/08/2021',
        idTorneo: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e : 2,
        id_t: 1,
        inscrito: true,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
    await queryInterface.bulkInsert('Partida', [
      {
        id_e1 : 1,
        id_e2: 2,
        idRonda: 1,
        fecha: '10/08/2021',
        h_ini: '1',
        h_fin: '2',
        ganador: '',
        inscrito: true,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
