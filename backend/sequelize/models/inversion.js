'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inversion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inversion.belongsTo(models.Inversor,{
        foreignKey:'id_inv'
      })
    }
  };
  Inversion.init({
    id_inv: DataTypes.INTEGER,
    monto: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Inversion',
    freezeTableName : true
  });
  return Inversion;
};