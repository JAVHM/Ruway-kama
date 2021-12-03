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
        texto: "Mensaje para el usuario de prueba",
        link: "NONE",
        fecha: new Date(),
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_u: 1,
        texto: "Mensaje para el usuario de prueba de nuevo",
        link: "https://www.youtube.com/watch?v=BIhhNoYNL40&t=9s",
        fecha: new Date(),
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id_u: 1,
        texto: "Mensaje para el usuario de prueba 3",
        link: "/listaProyectos",
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
