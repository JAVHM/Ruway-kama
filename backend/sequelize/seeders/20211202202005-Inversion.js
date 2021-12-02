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
   await queryInterface.bulkInsert('Inversion',[{
      id_inv:1,
      monto:100,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      id_inv:2,
      monto:200,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      id_inv:1,
      monto:300,
      createdAt:new Date(),
      updatedAt:new Date()
    }])
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
