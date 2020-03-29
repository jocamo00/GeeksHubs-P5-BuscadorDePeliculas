'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    dirección: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    //Un usuario puede tener muchas tareas
    User.hasMany(models.Task);
  };
  return User;
};