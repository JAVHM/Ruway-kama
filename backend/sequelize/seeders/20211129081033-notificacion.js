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
     await queryInterface.bulkInsert('Notificacion',[
      {
        id_u: 1,
        texto: "Mensaje para el usuario 3",
        link: "Mensaje para el usuario 3",
        fecha: new Date(),
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_u: 1,
        texto: "Mensaje para el usuario 3 de nuevo",
        link: "Mensaje para el usuario 3 de nuevo",
        fecha: new Date(),
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
