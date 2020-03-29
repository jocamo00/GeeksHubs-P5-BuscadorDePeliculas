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
    //Una tarea pertenece a un estado
    Task.belongsTo(models.Status);

    //Una tarea pertenece a una categoria
    Task.belongsTo(models.Category);

    //Una tarea pertenece a un usuario
    Task.belongsTo(models.User);
  };
  return Task;
};