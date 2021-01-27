'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Comments', [
    {
      userId: 1,
      itemId: 1,
      rating: 5,
      title: 'Cool!',
      content: 'Quite the product!',
    },
    {
      userId: 1,
      itemId: 2,
      rating: 5,
      title: 'Cool!',
      content: 'Quite the product!',
    },
    {
      userId: 2,
      itemId: 3,
      rating: 3,
      title: 'Cool!',
      content: 'Quite the product!',
    },
    {
      userId: 3,
      itemId: 4,
      rating: 1,
      title: 'Cool!',
      content: 'Quite the product!',
    },
    {
      userId: 1,
      itemId: 1,
      rating: 3,
      title: 'Cool!',
      content: 'Quite the product!',
    },
    {
      userId: 6,
      itemId: 4,
      rating: 2,
      title: 'Cool!',
      content: 'Quite the product!',
    },
    {
      userId: 6,
      itemId: 3,
      rating: 4,
      title: 'Cool!',
      content: 'Quite the product!',
    },
    {
      userId: 6,
      itemId: 2,
      rating: 4,
      title: 'Cool!',
      content: 'Quite the product!',
    },
    {
      userId: 5,
      itemId: 7,
      rating: 1,
      title: 'Cool!',
      content: 'Quite the product!',
    },
    {
      userId: 4,
      itemId: 13,
      rating: 2,
      title: 'Cool!',
      content: 'Quite the product!',
    },
    {
      userId: 5,
      itemId: 12,
      rating: 3,
      title: 'Cool!',
      content: 'Quite the product!',
    },
    {
      userId: 6,
      itemId: 16,
      rating: 2,
      title: 'Cool!',
      content: 'Quite the product!',
    },
], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
