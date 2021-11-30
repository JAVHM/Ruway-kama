'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Notificacion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_u: {
        type: Sequelize.INTEGER
      },
      texto: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
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
    await queryInterface.addConstraint('Notificacion', {
      type : 'FOREIGN KEY',
      fields : ['id_u'],
      name : 'FK_Notif_u',
      references : {
        table : 'Usuario',
        field  : 'id'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Notificacion', 'FK_Notif_u');
    await queryInterface.dropTable('Notificacion');
  }
};