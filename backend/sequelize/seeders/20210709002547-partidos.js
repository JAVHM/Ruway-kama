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
     await queryInterface.bulkInsert('Partido', [
      {
        id_e1 : 1,
        id_e2 : 2,
        idRonda : 1,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id_e1 : 2,
        id_e2 : 3,
        idRonda : 1,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id_e1 : 4,
        id_e2 : 5,
        idRonda : 1,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id_e1 : 6,
        id_e2 : 7,
        idRonda : 1,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id_e1 : 8,
        id_e2 : 9,
        idRonda : 1,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 9,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id_e1 : 10,
        id_e2 : 11,
        idRonda : 1,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 11,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 12,
        id_e2 : 13,
        idRonda : 1,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 13,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 14,
        id_e2 : 15,
        idRonda : 1,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 15,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//CUARTOS
        id_e1 : 1,
        id_e2 : 3,
        idRonda : 2,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 5,
        id_e2 : 7,
        idRonda : 2,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 9,
        id_e2 : 11,
        idRonda : 2,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 11,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 13,
        id_e2 : 15,
        idRonda : 2,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 15,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//Semis
        id_e1 : 3,
        id_e2 : 7,
        idRonda : 3,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 11,
        id_e2 : 15,
        idRonda : 3,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 15,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//Final
        id_e1 : 7,
        id_e2 : 15,
        idRonda : 4,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 15,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//TEST TORNEO 3
        id_e1 : 1,
        id_e2 : 2,
        idRonda : 7,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 3,
        id_e2 : 4,
        idRonda : 7,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 5,
        id_e2 : 6,
        idRonda : 7,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 7,
        id_e2 : 8,
        idRonda : 7,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 9,
        id_e2 : 10,
        idRonda : 7,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 9,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 11,
        id_e2 : 12,
        idRonda : 7,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 11,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 13,
        id_e2 : 14,
        idRonda : 7,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 13,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 15,
        id_e2 : 16,
        idRonda : 7,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 15,
        createdAt : new Date(),
        updatedAt : new Date()
      },{// Torneo3 - Ronda 2
        id_e1 : 1,
        id_e2 : 3,
        idRonda : 8,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 5,
        id_e2 : 7,
        idRonda : 8,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 9,
        id_e2 : 11,
        idRonda : 8,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 9,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 13,
        id_e2 : 15,
        idRonda : 8,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 13,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//Torneo3 - Ronda3
        id_e1 : 1,
        id_e2 : 5,
        idRonda : 9,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 9,
        id_e2 : 13,
        idRonda : 9,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 9,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//Torneo3 - Ronda4
        id_e1 : 1,
        id_e2 : 9,
        idRonda : 10,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 13,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//TORNEO4 - Ronda1
        id_e1 : 1,
        id_e2 : 2,
        idRonda : 11,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 3,
        id_e2 : 4,
        idRonda : 11,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//TORNEO4 - Ronda2
        id_e1 : 1,
        id_e2 : 3,
        idRonda : 12,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 2,
        id_e2 : 4,
        idRonda : 12,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//TORNEO4 - Ronda3
        id_e1 : 1,
        id_e2 : 4,
        idRonda : 13,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 2,
        id_e2 : 3,
        idRonda : 13,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//TORNEO 2 - R1_TCT
        id_e1 : 1,
        id_e2 : 2,
        idRonda : 2,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 3,
        id_e2 : 4,
        idRonda : 2,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 5,
        id_e2 : 6,
        idRonda : 2,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_e1 : 7,
        id_e2 : 8,
        idRonda : 2,
        fecha : 1,
        h_ini : 1,
        h_fin : 1,
        ganador : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
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
