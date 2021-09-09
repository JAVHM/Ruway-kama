'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Torneo_Equipo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_e: {
        type: Sequelize.INTEGER
      },
      id_t: {
        type: Sequelize.INTEGER
      },
      inscrito: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.addConstraint('Torneo_Equipo', {
      type : 'FOREIGN KEY',
      fields : ['id_e'],
      name : 'FK_TE_Equipo',
      references : {
        table : 'Equipo',
        field  : 'id'
      }
    });
    await queryInterface.addConstraint('Torneo_Equipo', {
      type : 'FOREIGN KEY',
      fields : ['id_t'],
      name : 'FK_TE_Torneo',
      references : {
        table : 'Torneo',
        field  : 'id'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Torneo_Equipo', 'FK_TE_Equipo');
    await queryInterface.removeConstraint('Torneo_Equipo', 'FK_TE_Torneo');
    await queryInterface.dropTable('Torneo_Equipo');
  }
};