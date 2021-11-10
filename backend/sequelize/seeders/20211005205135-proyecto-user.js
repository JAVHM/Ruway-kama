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
    /* POR MEJORAR EN SEEDERS!*/
    await queryInterface.bulkInsert('Proyecto',[
      {
        nombre: 'pruebita',
        categorias: 'prueba prueba pruebas',
        descripcion: 'prueba',
        fechaCreacion: new Date(),
        fechaLimite: new Date(),
        imagen:'imgProy1.jpg',
        montoRecaudado: 6969,
        idUsuario: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        nombre: 'Ruwaykama',
        categorias: 'pagina web',
        descripcion: 'PROYECTO ING SOFTWARE 2',
        fechaCreacion: new Date(),
        fechaLimite: new Date(),
        imagen:'imgProy2.jpg',
        montoRecaudado: 777,
        idUsuario: 1,
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
     await queryInterface.bulkDelete('Proyecto', null, {});
  }
};
