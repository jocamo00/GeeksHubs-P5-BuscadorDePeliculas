'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    nombre: DataTypes.STRING,
    descripción: DataTypes.TEXT
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    
  };
  return Category;
};