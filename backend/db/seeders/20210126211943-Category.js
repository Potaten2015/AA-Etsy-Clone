'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Categories', [
    {
      name: 'Decorations',
    },
    {
      name: 'Fruit',
    },
    {
      name: 'Animals',
    },
    {
      name: 'Lawn',
    },
    {
      name: 'Garden',
    },
    {
      name: 'Keys',
    },
    {
      name: 'Tools',
    },
    {
      name: 'Lights',
    },
    {
      name: 'Shoes',
    },
    {
      name: 'Home',
    },
    {
      name: 'Pictures',
    },
], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
