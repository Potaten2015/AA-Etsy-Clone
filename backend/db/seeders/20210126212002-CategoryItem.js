'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('CategoryItems', [
    {
      itemId: 1,
      categoryId: 1,
    },
    {
      itemId: 1,
      categoryId: 4,
    },
    {
      itemId: 1,
      categoryId: 5,
    },
    {
      itemId: 2,
      categoryId: 2,
    },
    {
      itemId: 3,
      categoryId: 1,
    },
    {
      itemId: 3,
      categoryId: 3,
    },
    {
      itemId: 3,
      categoryId: 4,
    },
    {
      itemId: 3,
      categoryId: 10,
    },
    {
      itemId: 4,
      categoryId: 1,
    },
    {
      itemId: 4,
      categoryId: 4,
    },
    {
      itemId: 4,
      categoryId: 5,
    },
    {
      itemId: 4,
      categoryId: 10,
    },
    {
      itemId: 5,
      categoryId: 1,
    },
    {
      itemId: 5,
      categoryId: 10,
    },
    {
      itemId: 5,
      categoryId: 11,
    },
    {
      itemId: 6,
      categoryId: 1,
    },
    {
      itemId: 6,
      categoryId: 4,
    },
    {
      itemId: 6,
      categoryId: 4,
    },
    {
      itemId: 7,
      categoryId: 1,
    },
    {
      itemId: 7,
      categoryId: 4,
    },
    {
      itemId: 7,
      categoryId: 5,
    },
    {
      itemId: 8,
      categoryId: 2,
    },
    {
      itemId: 9,
      categoryId: 2,
    },
    {
      itemId: 10,
      categoryId: 6,
    },
    {
      itemId: 10,
      categoryId: 7,
    },
    {
      itemId: 11,
      categoryId: 1,
    },
    {
      itemId: 11,
      categoryId: 8,
    },
    {
      itemId: 12,
      categoryId: 1,
    },
    {
      itemId: 12,
      categoryId: 8,
    },
    {
      itemId: 13,
      categoryId: 1,
    },
    {
      itemId: 13,
      categoryId: 3,
    },
    {
      itemId: 13,
      categoryId: 4,
    },
    {
      itemId: 13,
      categoryId: 5,
    },
    {
      itemId: 13,
      categoryId: 10,
    },
    {
      itemId: 14,
      categoryId: 1,
    },
    {
      itemId: 14,
      categoryId: 10,
    },
    {
      itemId: 15,
      categoryId: 1,
    },
    {
      itemId: 15,
      categoryId: 8,
    },
    {
      itemId: 15,
      categoryId: 9,
    },
    {
      itemId: 16,
      categoryId: 4,
    },
    {
      itemId: 16,
      categoryId: 5,
    },
    {
      itemId: 16,
      categoryId: 7,
    },
], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('CategoryItems', null, {});
  }
};
