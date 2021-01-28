'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    shortDescription: DataTypes.STRING,
    longDescription: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    sellerId: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING,
    photos: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  Item.associate = function(models) {
    Item.belongsTo(models.User, {foreignKey: 'sellerId'});
    const columnMapping1 = {
      through: 'CategoryItem',
      otherKey: 'categoryId',
      foreignKey: 'itemId'
    };
    Item.belongsToMany(models.Category, columnMapping1);
    const columnMapping2 = {
      through: 'OrderItem',
      otherKey: 'orderId',
      foreignKey: 'itemId'
    };
    Item.belongsToMany(models.Order, columnMapping2);
    const columnMapping3 = {
      through: 'Favorite',
      otherKey: 'userId',
      foreignKey: 'itemId'
    };
    Item.belongsToMany(models.User, columnMapping3);
    Item.hasMany(models.Comment, { foreignKey: 'itemId' })
  };
  return Item;
};
