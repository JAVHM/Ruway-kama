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
     await queryInterface.bulkInsert('Ronda', [
      {
        nombre : "Octavos de Final",
        n_cor : 8,
        n_par: 1,
        f_ini: new Date(2021,7,14,4,0,0),
        idTorneo: 1,
        estado: "en curso",
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : "Cueartos de Final",
        n_cor : 4,
        n_par: 1,
        f_ini: new Date(2021,7,14,5,0,0),
        idTorneo: 1,
        estado: "en curso",
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : "Semifinales",
        n_cor : 2,
        n_par: 1,
        f_ini: new Date(2021,7,15,4,0,0),
        idTorneo: 1,
        estado: "en curso",
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : "La gran final",
        n_cor : 1,
        n_par: 1,
        f_ini: new Date(2021,7,15,5,0,0),
        idTorneo: 1,
        estado: "en curso",
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : "Ronda 1 Torneo 2",
        n_cor : 2,
        n_par: 2,
        f_ini: new Date(2021,7,15,4,0,0),
        idTorneo: 2,
        estado: "acabado",
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : "Ronda 2 Torneo 2",
        n_cor : 3,
        n_par: 3,
        f_ini: new Date(2021,7,15,4,0,0),
        idTorneo: 2,
        estado: "en espera",
        createdAt : new Date(),
        updatedAt : new Date()
      },{//TORNEO 3 -TEST
        nombre : "Ronda 1 Torneo 3",
        n_cor : 3,
        n_par: 8,
        f_ini: new Date(2021,7,15,4,0,0),
        idTorneo: 3,
        estado: "en espera",
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : "Ronda 2 Torneo 3",
        n_cor : 3,
        n_par: 4,
        f_ini: new Date(2021,7,15,4,0,0),
        idTorneo: 3,
        estado: "en espera",
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : "Ronda 3 Torneo 3",
        n_cor : 3,
        n_par: 2,
        f_ini: new Date(2021,7,15,4,0,0),
        idTorneo: 3,
        estado: "en espera",
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : "Ronda 4 Torneo 3",
        n_cor : 3,
        n_par: 1,
        f_ini: new Date(2021,7,15,4,0,0),
        idTorneo: 3,
        estado: "en espera",
        createdAt : new Date(),
        updatedAt : new Date()
      },{//TORNEO 4 - TCT
        nombre : "Ronda 1 Torneo 4",
        n_cor : 3,
        n_par: 2,
        f_ini: new Date(2021,7,15,4,0,0),
        idTorneo: 4,
        estado: "en espera",
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : "Ronda 2 Torneo 4",
        n_cor : 3,
        n_par: 2,
        f_ini: new Date(2021,7,15,4,0,0),
        idTorneo: 4,
        estado: "en espera",
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : "Ronda 3 Torneo 4",
        n_cor : 3,
        n_par: 2,
        f_ini: new Date(2021,7,15,4,0,0),
        idTorneo: 4,
        estado: "en espera",
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
