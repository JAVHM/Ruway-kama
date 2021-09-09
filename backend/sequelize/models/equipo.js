'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Equipo.belongsTo(models.Usuario, {
        foreignKey : 'idParticipanteLider'
      })
      Equipo.hasMany(models.Torneo_Equipo, {
        foreignKey : 'id_e'
      })
    }
  };
  Equipo.init({
    nombre: DataTypes.STRING,
    listaParticipantes: DataTypes.STRING,
    idParticipanteLider: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Equipo',
    freezeTableName : true
  });
  return Equipo;
};