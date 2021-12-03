'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.Proyecto, {
        foreignKey : 'idUsuario'
      });
      Usuario.hasMany(models.Favoritos, {
        foreignKey : 'id_u'
      })
      Usuario.hasMany(models.Inversor,{
        foreignKey:'id_u'
      })
    }
  };
  Usuario.init({
    nombre: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    correo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    rol:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
    freezeTableName: true,
  });
  return Usuario;
};