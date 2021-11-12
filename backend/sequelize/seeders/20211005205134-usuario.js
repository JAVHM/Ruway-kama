'use strict';
const bcryptjs = require('bcryptjs');

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
     const texto = await bcryptjs.hash('pruebaprueba',8)
     await queryInterface.bulkInsert('Usuario',[{
      nombre:'prueba',
      contraseña:texto,
      correo:'prueba@prueba.com',
      descripcion:'prueba prueba prueba prueba prueba prueba prueba prueba prueba ',
      createdAt : new Date(),
      updatedAt : new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Usuario', null, {});
  }
};
