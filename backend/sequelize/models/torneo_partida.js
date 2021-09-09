'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Torneo_Partida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Torneo_Partida.belongsTo(models.Partido, {
        foreignKey : 'id_p'
      })
      Torneo_Partida.belongsTo(models.Torneo, {
        foreignKey : 'id_t'
      })
      Torneo_Partida.belongsTo(models.Equipo, {
        foreignKey : 'id_e1'
      })
      Torneo_Partida.belongsTo(models.Equipo, {
        foreignKey : 'id_e2'
      })
    }
  };
  Torneo_Partida.init({
    id_p: DataTypes.INTEGER,
    ordenRonda: DataTypes.INTEGER,
    id_t: DataTypes.INTEGER,
    id_e1: DataTypes.INTEGER,
    id_e2: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Torneo_Partida',
    freezeTableName : true
  });
  return Torneo_Partida;
};