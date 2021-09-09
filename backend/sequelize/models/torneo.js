'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Torneo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Torneo.belongsTo(models.Juego, {
        foreignKey : 'idJuego'
      })
      //Un torneo tiene una a muchas rondas, el ID por el que una ronda se conecta con un torneo es por ID torneo (propiedad de ronda)
      Torneo.hasMany(models.Ronda, {
        foreignKey : 'idTorneo'
      })
      Torneo.hasMany(models.Torneo_Equipo, {
        foreignKey : 'id_t'
      })
    }
  };
  Torneo.init({
    nombre: DataTypes.STRING,
    estado: DataTypes.STRING,
    f_ini: DataTypes.STRING,
    f_fin: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    cantMax: DataTypes.INTEGER,
    tipoTorneo: DataTypes.STRING,
    idJuego: DataTypes.INTEGER,
    partidasDia : DataTypes.INTEGER,
    puntosPartGanada : DataTypes.INTEGER,
    puntosPartEmpatada : DataTypes.INTEGER,
    puntosPartPerdida : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Torneo',
    freezeTableName : true
  });
  return Torneo;
};