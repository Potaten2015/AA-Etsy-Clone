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
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Fruit',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Animals',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Lawn',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Garden',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Keys',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Tools',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Lights',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Shoes',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Home',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Pictures',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
