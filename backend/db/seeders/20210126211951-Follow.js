'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Follows', [
      {
        followedUserId: 2,
        followingUserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followedUserId: 1,
        followingUserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followedUserId: 3,
        followingUserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followedUserId: 4,
        followingUserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followedUserId: 5,
        followingUserId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followedUserId: 6,
        followingUserId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followedUserId: 5,
        followingUserId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followedUserId: 4,
        followingUserId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followedUserId: 4,
        followingUserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Follows', null, {});
  }
};
