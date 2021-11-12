'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favoritos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favoritos.belongsTo(models.Usuario, {
        foreignKey : 'id_u'
      })
      Favoritos.belongsTo(models.Proyecto, {
        foreignKey : 'id_p'
      })
    }
  };
  Favoritos.init({
    id_u: DataTypes.INTEGER,
    id_p: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favoritos',
    freezeTableName : true
  });
  return Favoritos;
};