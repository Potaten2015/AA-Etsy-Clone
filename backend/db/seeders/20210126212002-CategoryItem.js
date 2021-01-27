'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('CategoryItems', [
    {
      itemId: 1,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 1,
      categoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 1,
      categoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 2,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 3,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 3,
      categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 3,
      categoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 3,
      categoryId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 4,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 4,
      categoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 4,
      categoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 4,
      categoryId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 5,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 5,
      categoryId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 5,
      categoryId: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 6,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 6,
      categoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 6,
      categoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 7,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 7,
      categoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 7,
      categoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 8,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 9,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 10,
      categoryId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 10,
      categoryId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 11,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 11,
      categoryId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 12,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 12,
      categoryId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 13,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 13,
      categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 13,
      categoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 13,
      categoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 13,
      categoryId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 14,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 14,
      categoryId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 15,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 15,
      categoryId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 15,
      categoryId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 16,
      categoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 16,
      categoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      itemId: 16,
      categoryId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('CategoryItems', null, {});
  }
};
