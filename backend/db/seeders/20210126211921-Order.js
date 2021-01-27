'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Orders', [
    {
      userId: 1,
    },
    {
      userId: 2,
    },
    {
      userId: 3,
    },
    {
      userId: 4,
    },
    {
      userId: 5,
    },
    {
      userId: 1,
    },
    {
      userId: 1,
    },
    {
      userId: 1,
    },
    {
      userId: 6,
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
