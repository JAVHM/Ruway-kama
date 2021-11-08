'use strict';
const bcryptjs = require('bcryptjs');
const prueba='prueba'
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
     await queryInterface.bulkInsert('Usuario',[{
      nombre:'prueba',
      contraseña:await bcryptjs.hash('prueba',8),
      correo:'prueba@prueba.com',
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
