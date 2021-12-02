'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Inversion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_inv: {
        type: Sequelize.INTEGER
      },
      monto: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('Inversion', {
      type : 'FOREIGN KEY',
      fields : ['id_inv'],
      name : 'FK_Inv_inv',
      references : {
        table : 'Inversor',
        field  : 'id'
      }
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Inversion', 'FK_Inv_inv');
    await queryInterface.dropTable('Inversion');
  }
};