'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Partido', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_e1: {
        type: Sequelize.INTEGER
      },
      id_e2: {
        type: Sequelize.INTEGER
      },
      idRonda: {
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.STRING
      },
      h_ini: {
        type: Sequelize.STRING
      },
      h_fin: {
        type: Sequelize.STRING
      },
      ganador: {
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
    await queryInterface.addConstraint('Partido', {
      type : 'FOREIGN KEY',
      fields : ['id_e1'],
      name : 'FK_Partido_Equipo_1',
      references : {
        table : 'Equipo',
        field  : 'id'
      }
    });
    await queryInterface.addConstraint('Partido', {
      type : 'FOREIGN KEY',
      fields : ['id_e2'],
      name : 'FK_Partido_Equipo_2',
      references : {
        table : 'Equipo',
        field  : 'id'
      }
    });
    await queryInterface.addConstraint('Partido', {
      type : 'FOREIGN KEY',
      fields : ['idRonda'],
      name : 'FK_Partido_Ronda',
      references : {
        table : 'Ronda',
        field  : 'id'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Partido', 'FK_Partido_Equipo_1');
    await queryInterface.removeConstraint('Partido', 'FK_Partido_Equipo_2');
    await queryInterface.removeConstraint('Partido', 'FK_Partido_Ronda');
    await queryInterface.dropTable('Partido');
  }
};