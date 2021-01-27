'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Favorites', [
    {
      userId: 1,
      itemId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 1,
      itemId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      itemId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      itemId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 6,
      itemId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 5,
      itemId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 4,
      itemId: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      itemId: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 5,
      itemId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      itemId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      itemId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      itemId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 5,
      itemId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      itemId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 5,
      itemId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 6,
      itemId: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      itemId: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 4,
      itemId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 4,
      itemId: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      itemId: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Favorites', null, {});
  }
};
