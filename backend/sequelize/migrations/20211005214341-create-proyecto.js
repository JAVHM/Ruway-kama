'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Proyecto', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      categorias: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      fechaCreacion: {
        type: Sequelize.DATE
      },
      fechaLimite: {
        type: Sequelize.DATE
      },
      imagen: {
        type: Sequelize.STRING
      },
      montoRecaudado: {
        type: Sequelize.FLOAT
      },
      links_externos: {
        type: Sequelize.STRING
      },
      idUsuario: {
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

    await queryInterface.addConstraint('Proyecto',{
      type: 'FOREIGN KEY',
      fields:['idUsuario'],
      name:'FK_Proyecto_Usuario',
      references:{
        table:'Usuario',
        field:'id'
      }
    })

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Proyecto','FK_Proyecto_Usuario')
    await queryInterface.dropTable('Proyecto');

  }
};