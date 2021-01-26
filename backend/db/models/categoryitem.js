'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryItem = sequelize.define('CategoryItem', {
    itemId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  CategoryItem.associate = function(models) {
    // associations can be defined here
  };
  return CategoryItem;
};