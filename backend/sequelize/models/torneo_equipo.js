'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Torneo_Equipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Torneo_Equipo.belongsTo(models.Equipo, {
        foreignKey : 'id_e'
      })
      Torneo_Equipo.belongsTo(models.Torneo, {
        foreignKey : 'id_t'
      })
    }
  };
  Torneo_Equipo.init({
    id_e: DataTypes.INTEGER,
    id_t: DataTypes.INTEGER,
    inscrito: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Torneo_Equipo',
    freezeTableName : true
  });
  return Torneo_Equipo;
};