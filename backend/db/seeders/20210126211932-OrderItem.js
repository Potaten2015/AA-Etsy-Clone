'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('OrderItems', [
    {
      orderId: 1,
      itemId: 1,
    },
    {
      orderId: 1,
      itemId: 2,
    },
    {
      orderId: 1,
      itemId: 3,
    },
    {
      orderId: 2,
      itemId: 4,
    },
    {
      orderId: 2,
      itemId: 5,
    },
    {
      orderId: 4,
      itemId: 6,
    },
    {
      orderId: 1,
      itemId: 7,
    },
    {
      orderId: 5,
      itemId: 8,
    },
    {
      orderId: 6,
      itemId: 9,
    },
    {
      orderId: 3,
      itemId: 10,
    },
    {
      orderId: 6,
      itemId: 11,
    },
    {
      orderId: 7,
      itemId: 12,
    },
    {
      orderId: 2,
      itemId: 13,
    },
    {
      orderId: 4,
      itemId: 14,
    },
    {
      orderId: 3,
      itemId: 15,
    },
    {
      orderId: 8,
      itemId: 16,
    },
    {
      orderId: 8,
      itemId: 12,
    },
    {
      orderId: 7,
      itemId: 12,
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('OrderItems', null, {});
  }
};
