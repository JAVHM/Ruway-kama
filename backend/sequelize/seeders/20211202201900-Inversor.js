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
    await queryInterface.bulkInsert('Inversor',[{
      id_u:1,
      id_p:1,
      InverAcum:400,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      id_u:1,
      id_p:2,
      InverAcum:0,
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
