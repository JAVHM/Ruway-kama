'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Partido.belongsTo(models.Equipo, {
        foreignKey : 'id_e1'
      })
      Partido.belongsTo(models.Equipo, {
        foreignKey : 'id_e2'
      })
      Partido.belongsTo(models.Ronda, {
        foreignKey : 'idRonda'
      })
    }
  };
  Partido.init({
    id_e1: DataTypes.INTEGER,
    id_e2: DataTypes.INTEGER,
    idRonda: DataTypes.INTEGER,
    fecha: DataTypes.STRING,
    h_ini: DataTypes.STRING,
    h_fin: DataTypes.STRING,
    ganador: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Partido',
    freezeTableName : true
  });
  return Partido;
};