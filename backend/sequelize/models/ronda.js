'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ronda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ronda.belongsTo(models.Torneo, {
        foreignKey : 'idTorneo'
      })
      Ronda.hasMany(models.Partido, {
        foreignKey : 'idRonda'
      })
    }
  };
  Ronda.init({
    nombre : DataTypes.STRING,
    n_cor: DataTypes.INTEGER,
    n_par: DataTypes.INTEGER,
    f_ini: DataTypes.STRING,
    estado: DataTypes.STRING,
    idTorneo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ronda',
    freezeTableName : true
  });
  return Ronda;
};