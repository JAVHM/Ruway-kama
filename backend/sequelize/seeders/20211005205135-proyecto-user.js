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
    /* POR MEJORAR EN SEEDERS!
    await queryInterface.bulkInsert('Proyecto',[{
      categorias: 'prueba prueba pruebas',
      descripcion: 'prueba',
      fechaCreacion: new Date(),
      fechaLimite: new Date(),
      imagen:'imagen.jpg',
      montoRecaudado: 1000,
      idUsuario: 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }])*/

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Proyecto', null, {});
  }
};
