'use strict';
const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(10)
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
   // Agregar usuarios 
   return queryInterface.bulkInsert('Usuario', [
    // agregar administrador 
    {
      nombre: 'administrador',
      contraseña: bcrypt.hashSync("admin", salt),
      correo: 'administrador@example.com',
      descripcion: "Este es la cuenta del moderador",
      rol:'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Usuario', null, {});
  }
};
