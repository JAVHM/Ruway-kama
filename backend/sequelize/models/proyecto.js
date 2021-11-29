'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proyecto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Proyecto.belongsTo(models.Usuario,{
        foreignKey:'idUsuario'
      })
      Proyecto.hasMany(models.Favoritos, {
        foreignKey : 'id_p'
      })
    };
  };
  Proyecto.init({
    nombre: DataTypes.STRING,
    categorias: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    fechaCreacion: DataTypes.DATE,
    fechaLimite: DataTypes.DATE,
    imagen: DataTypes.STRING,
    montoRecaudado: DataTypes.FLOAT,
    links_externos: DataTypes.STRING,
    idUsuario: DataTypes.INTEGER,
    validacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Proyecto',
    freezeTableName: true,
  });
  return Proyecto;
};