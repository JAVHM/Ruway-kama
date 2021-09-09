'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Torneo_Partida', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_p: {
        type: Sequelize.INTEGER
      },
      ordenRonda: {
        type: Sequelize.INTEGER
      },
      id_t: {
        type: Sequelize.INTEGER
      },
      id_e1: {
        type: Sequelize.INTEGER
      },
      id_e2: {
        type: Sequelize.INTEGER
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
    await queryInterface.addConstraint('Torneo_Partida', {
      type : 'FOREIGN KEY',
      fields : ['id_p'],
      name : 'FK_TP_Partida',
      references : {
        table : 'Partido',
        field  : 'id'
      }
    });
    await queryInterface.addConstraint('Torneo_Partida', {
      type : 'FOREIGN KEY',
      fields : ['id_t'],
      name : 'FK_TP_Torneo',
      references : {
        table : 'Torneo',
        field  : 'id'
      }
    });
    await queryInterface.addConstraint('Torneo_Partida', {
      type : 'FOREIGN KEY',
      fields : ['id_e1'],
      name : 'FK_TP_EQUIPO1',
      references : {
        table : 'Equipo',
        field  : 'id'
      }
    });
    await queryInterface.addConstraint('Torneo_Partida', {
      type : 'FOREIGN KEY',
      fields : ['id_e2'],
      name : 'FK_TP_EQUIPO2',
      references : {
        table : 'Equipo',
        field  : 'id'
      }
    });
    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Torneo_Partida', 'FK_TP_Partida');
    await queryInterface.removeConstraint('Torneo_Partida', 'FK_TP_Torneo');
    await queryInterface.removeConstraint('Torneo_Partida', 'FK_TP_EQUIPO1');
    await queryInterface.removeConstraint('Torneo_Partida', 'FK_TP_EQUIPO2');
    await queryInterface.dropTable('Torneo_Partida');
  }
};