'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    nombre: DataTypes.STRING
  }, {});
  Status.associate = function(models) {
    // associations can be defined here
    //Un estado puede tenre muchas tareas
    Status.hasMany(models.Task);
  };
  return Status;
};