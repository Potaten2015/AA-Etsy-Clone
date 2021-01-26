'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.User, {foreignKey: 'userId'});
    const columnMapping1 = {
      through: 'OrderItem',
      otherKey: 'itemId',
      foreignKey: 'orderId'
    }
    Item.belongsToMany(models.Order, columnMapping1)
  };
  return Order;
};
