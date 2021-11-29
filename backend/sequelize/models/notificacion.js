'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notificacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Notificacion.belongsTo(models.Usuario, {
        foreignKey : 'id_u'
      })
    }
  };
  Notificacion.init({
    id_u: DataTypes.INTEGER,
    texto: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Notificacion',
    freezeTableName : true
  });
  return Notificacion;
};