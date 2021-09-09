'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Torneo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      f_ini: {
        type: Sequelize.STRING
      },
      f_fin: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      cantMax: {
        type: Sequelize.INTEGER
      },
      tipoTorneo: {
        type: Sequelize.STRING
      },
      idJuego: {
        type: Sequelize.INTEGER
      },
      partidasDia: {
        type: Sequelize.INTEGER
      },
      puntosPartGanada: {
        type: Sequelize.INTEGER
      },
      puntosPartEmpatada: {
        type: Sequelize.INTEGER
      },
      puntosPartPerdida: {
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
    await queryInterface.addConstraint('Torneo', {
      type : 'FOREIGN KEY',
      fields : ['idJuego'],
      name : 'FK_Torneo_Juego',
      references : {
        table : 'Juego',
        field  : 'id'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Torneo', 'FK_Torneo_Juego');
    await queryInterface.dropTable('Torneo');
  }
};