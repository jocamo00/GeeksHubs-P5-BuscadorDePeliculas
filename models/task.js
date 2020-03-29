'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    statusId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    //Una tarea tiene un estado
    Task.hasOne(models.Status);

    //Una tarea tiene una categoria
    Task.hasOne(models.Category);

    //Una tarea tiene un usuario
    Task.hasOne(models.User);
  };
  return Task;
};