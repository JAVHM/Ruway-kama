'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Favoritos', {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('Favoritos', {
      type : 'FOREIGN KEY',
      fields : ['id_u'],
      name : 'FK_Fav_u',
      references : {
        table : 'Usuario',
        field  : 'id'
      }
    });
    await queryInterface.addConstraint('Favoritos', {
      type : 'FOREIGN KEY',
      fields : ['id_p'],
      name : 'FK_Fav_p',
      references : {
        table : 'Proyecto',
        field  : 'id'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Favoritos', 'FK_Fav_u');
    await queryInterface.removeConstraint('Favoritos', 'FK_Fav_p');
    await queryInterface.dropTable('Favoritos');
  }
};