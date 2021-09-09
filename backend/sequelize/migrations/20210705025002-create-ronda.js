'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ronda', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre : {
        type: Sequelize.STRING
      },
      n_cor: {
        type: Sequelize.INTEGER
      },
      n_par: {
        type: Sequelize.INTEGER
      },
      f_ini: {
        type: Sequelize.STRING
      },
      idTorneo: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.STRING
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
    await queryInterface.addConstraint('Ronda', {
      type : 'FOREIGN KEY',
      fields : ['idTorneo'],
      name : 'FK_Ronda_Torneo',
      references : {
        table : 'Torneo',
        field  : 'id'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Ronda', 'FK_Ronda_Torneo');
    await queryInterface.dropTable('Ronda');
  }
};