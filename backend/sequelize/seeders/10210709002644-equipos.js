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
     await queryInterface.bulkInsert('Equipo', [
      {
        nombre : 'Ilustres de la Inquisición',
        listaParticipantes: 'libLestA, Parlante',
        idParticipanteLider: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Soldados de la Melancolía',
        listaParticipantes : 'Rayo, Tasha',
        idParticipanteLider: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Sus',
        listaParticipantes : 'Amon, Gus',
        idParticipanteLider: 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Equipo 4',
        listaParticipantes : 'Uno, Cuatro',
        idParticipanteLider: 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'TSM',
        listaParticipantes : 'Bjersen, Doublelift',
        idParticipanteLider: 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Family',
        listaParticipantes : 'Vin Diesel, La Piedra',
        idParticipanteLider: 6,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Team Rocket',
        listaParticipantes : 'Jesse, James',
        idParticipanteLider: 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'C9',
        listaParticipantes : 'Sneaky, Jensen',
        idParticipanteLider: 8,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'SKT t1 Telecom',
        listaParticipantes : 'Faker, Bengi',
        idParticipanteLider: 9,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'R7',
        listaParticipantes : 'Seiya, Whitelotus',
        idParticipanteLider: 10,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Rox Tigers',
        listaParticipantes : 'Smeb, Pray',
        idParticipanteLider: 11,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'FNatic',
        listaParticipantes : 'xPeke, Rekkles',
        idParticipanteLider: 12,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'G2',
        listaParticipantes : 'Wunder, Jankos',
        idParticipanteLider: 13,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Damwon',
        listaParticipantes : 'Nuguri, Showmaker',
        idParticipanteLider: 14,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Sample text',
        listaParticipantes : 'A , B',
        idParticipanteLider: 15,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Ultimo equipo',
        listaParticipantes : 'Jugador eq16-1, Jugador eq16-2',
        idParticipanteLider: 16,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Equipo 17',
        listaParticipantes : 'Usuario 1-17, Usuario 2-17',
        idParticipanteLider: 17,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Equipo 18',
        listaParticipantes : 'Usuario 1-18, Usuario 2-18',
        idParticipanteLider: 17,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Equipo 19',
        listaParticipantes : 'Usuario 1-19, Usuario 2-19',
        idParticipanteLider: 17,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Equipo 20',
        listaParticipantes : 'Usuario 1-20, Usuario 2-20',
        idParticipanteLider: 17,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre : 'Equipo 21',
        listaParticipantes : 'Usuario 1-20, Usuario 2-20',
        idParticipanteLider: 17,
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
