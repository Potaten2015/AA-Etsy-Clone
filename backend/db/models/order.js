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
    Order.belongsToMany(models.Item, columnMapping1)
  };
  return Order;
};
