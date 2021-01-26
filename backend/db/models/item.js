'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    shortDescription: DataTypes.STRING,
    longDescription: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    sellerId: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING,
    photos: DataTypes.ENUM
  }, {});
  Item.associate = function(models) {
    Item.hasOne(model.User, {foreignKey: 'sellerId'});
    const columnMapping1 = {
      through: 'CategoryItem',
      otherKey: 'categoryId',
      foreignKey: 'itemId'
    }
    Item.belongsToMany(model.Category, columnMapping1);
    const columnMapping2 = {
      through: 'OrderItem',
      otherKey: 'orderId',
      foreignKey: 'itemId'
    }
    Item.belongsToMany(models.Order, columnMapping2);
    Item.hasMany(models.Comment, { foreignKey: 'itemId' })
  };
  return Item;
};
