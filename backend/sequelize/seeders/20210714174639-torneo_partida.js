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
    await queryInterface.bulkInsert('Torneo_Partida', [
      {
        id_p : 1,
        ordenRonda: 1,
        id_t: 1,
        id_e1: 1,
        id_e2: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 2,
        ordenRonda: 1,
        id_t: 1,
        id_e1: 2,
        id_e2: 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 3,
        ordenRonda: 1,
        id_t: 1,
        id_e1: 4,
        id_e2: 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 4,
        ordenRonda: 1,
        id_t: 1,
        id_e1: 6,
        id_e2: 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 5,
        ordenRonda: 1,
        id_t: 1,
        id_e1: 8,
        id_e2: 9,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 6,
        ordenRonda: 1,
        id_t: 1,
        id_e1: 10,
        id_e2: 11,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 7,
        ordenRonda: 1,
        id_t: 1,
        id_e1: 12,
        id_e2: 13,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 8,
        ordenRonda: 1,
        id_t: 1,
        id_e1: 14,
        id_e2: 15,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 9,
        ordenRonda: 2,
        id_t: 1,
        id_e1: 1,
        id_e2: 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 10,
        ordenRonda: 2,
        id_t: 1,
        id_e1: 5,
        id_e2: 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 11,
        ordenRonda: 2,
        id_t: 1,
        id_e1: 9,
        id_e2: 11,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 12,
        ordenRonda: 2,
        id_t: 1,
        id_e1: 13,
        id_e2: 15,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 13,
        ordenRonda: 3,
        id_t: 1,
        id_e1: 3,
        id_e2: 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 14,
        ordenRonda: 3,
        id_t: 1,
        id_e1: 11,
        id_e2: 15,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 15,
        ordenRonda: 4,
        id_t: 1,
        id_e1: 7,
        id_e2: 15,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//TORNEO 3 -Ronda1
        id_p : 16,
        ordenRonda: 1,
        id_t: 3,
        id_e1: 1,
        id_e2: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 17,
        ordenRonda: 1,
        id_t: 3,
        id_e1: 3,
        id_e2: 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 18,
        ordenRonda: 1,
        id_t: 3,
        id_e1: 5,
        id_e2: 6,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 19,
        ordenRonda: 1,
        id_t: 3,
        id_e1: 7,
        id_e2: 8,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 20,
        ordenRonda: 1,
        id_t: 3,
        id_e1: 9,
        id_e2: 10,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 21,
        ordenRonda: 1,
        id_t: 3,
        id_e1: 11,
        id_e2: 12,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 22,
        ordenRonda: 1,
        id_t: 3,
        id_e1: 13,
        id_e2: 14,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 23,
        ordenRonda: 1,
        id_t: 3,
        id_e1: 15,
        id_e2: 16,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//TORNEO 3 - Ronda2
        id_p : 24,
        ordenRonda: 2,
        id_t: 3,
        id_e1: 1,
        id_e2: 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 25,
        ordenRonda: 2,
        id_t: 3,
        id_e1: 5,
        id_e2: 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 26,
        ordenRonda: 2,
        id_t: 3,
        id_e1: 9,
        id_e2: 11,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 27,
        ordenRonda: 2,
        id_t: 3,
        id_e1: 13,
        id_e2: 15,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//TORNEO 3 - Ronda3
        id_p : 28,
        ordenRonda: 3,
        id_t: 3,
        id_e1: 1,
        id_e2: 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 29,
        ordenRonda: 3,
        id_t: 3,
        id_e1: 9,
        id_e2: 13,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//TORNEO 3 - Ronda4
        id_p : 30,
        ordenRonda: 4,
        id_t: 3,
        id_e1: 1,
        id_e2: 9,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//TORNEO 4 - Ronda1 - TCT
        id_p : 31,
        ordenRonda: 1,
        id_t: 4,
        id_e1: 1,
        id_e2: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 32,
        ordenRonda: 1,
        id_t: 4,
        id_e1: 3,
        id_e2: 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//TORNEO 4 - Ronda2 - TCT
        id_p : 33,
        ordenRonda: 2,
        id_t: 4,
        id_e1: 1,
        id_e2: 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 34,
        ordenRonda: 2,
        id_t: 4,
        id_e1: 2,
        id_e2: 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//TORNEO 4 - Ronda3 - TCT
        id_p : 35,
        ordenRonda: 3,
        id_t: 4,
        id_e1: 1,
        id_e2: 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 36,
        ordenRonda: 3,
        id_t: 4,
        id_e1: 2,
        id_e2: 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },{//TORNEO 2 - Ronda1 - TCT
        id_p : 37,
        ordenRonda: 1,
        id_t: 2,
        id_e1: 1,
        id_e2: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 38,
        ordenRonda: 1,
        id_t: 2,
        id_e1: 3,
        id_e2: 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 39,
        ordenRonda: 1,
        id_t: 2,
        id_e1: 5,
        id_e2: 6,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_p : 40,
        ordenRonda: 1,
        id_t: 2,
        id_e1: 7,
        id_e2: 8,
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
