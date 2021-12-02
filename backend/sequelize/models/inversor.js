'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inversor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inversor.belongsTo(models.Usuario, {
        foreignKey : 'id_u'
      })
      Inversor.belongsTo(models.Proyecto, {
        foreignKey : 'id_p'
      })
      Inversor.hasMany(models.Inversion,{
        foreignKey:'id_inv'
      })
    }
  };
  Inversor.init({
    id_u: DataTypes.INTEGER,
    id_p: DataTypes.INTEGER,
    InverAcum: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Inversor',
    freezeTableName : true
  });
  return Inversor;
};