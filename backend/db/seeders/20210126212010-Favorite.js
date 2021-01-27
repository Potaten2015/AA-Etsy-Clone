'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Favorites', [
    {
      userId: 1,
      itemId: 1,
    },
    {
      userId: 1,
      itemId: 2,
    },
    {
      userId: 2,
      itemId: 2,
    },
    {
      userId: 3,
      itemId: 2,
    },
    {
      userId: 6,
      itemId: 5,
    },
    {
      userId: 5,
      itemId: 5,
    },
    {
      userId: 4,
      itemId: 12,
    },
    {
      userId: 3,
      itemId: 11,
    },
    {
      userId: 5,
      itemId: 3,
    },
    {
      userId: 3,
      itemId: 6,
    },
    {
      userId: 2,
      itemId: 3,
    },
    {
      userId: 3,
      itemId: 4,
    },
    {
      userId: 5,
      itemId: 4,
    },
    {
      userId: 3,
      itemId: 4,
    },
    {
      userId: 5,
      itemId: 6,
    },
    {
      userId: 6,
      itemId: 13,
    },
    {
      userId: 2,
      itemId: 13,
    },
    {
      userId: 4,
      itemId: 5,
    },
    {
      userId: 4,
      itemId: 15,
    },
    {
      userId: 2,
      itemId: 12,
    },
], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Favorites', null, {});
  }
};
