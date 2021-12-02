'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Inversor', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_u: {
        type: Sequelize.INTEGER
      },
      id_p: {
        type: Sequelize.INTEGER
      },
      InverAcum: {
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
    await queryInterface.addConstraint('Inversor', {
      type : 'FOREIGN KEY',
      fields : ['id_u'],
      name : 'FK_Inv_u',
      references : {
        table : 'Usuario',
        field  : 'id'
      }
    });
    await queryInterface.addConstraint('Inversor', {
      type : 'FOREIGN KEY',
      fields : ['id_p'],
      name : 'FK_Inv_p',
      references : {
        table : 'Proyecto',
        field  : 'id'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Inversor', 'FK_Inv_u');
    await queryInterface.removeConstraint('Inversor', 'FK_Inv_p');
    await queryInterface.dropTable('Inversor');
  }
};