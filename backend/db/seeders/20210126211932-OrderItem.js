'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('OrderItems', [
    {
      orderId: 1,
      itemId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 1,
      itemId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 1,
      itemId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 2,
      itemId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 2,
      itemId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 4,
      itemId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 1,
      itemId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 5,
      itemId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 6,
      itemId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 3,
      itemId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 6,
      itemId: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 7,
      itemId: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 2,
      itemId: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 4,
      itemId: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 3,
      itemId: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 8,
      itemId: 16,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 8,
      itemId: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 7,
      itemId: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('OrderItems', null, {});
  }
};
