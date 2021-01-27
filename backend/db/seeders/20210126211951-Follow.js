'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Follows', [
      {
        followedUserId: 2,
        followingUserId: 1,
      },
      {
        followedUserId: 1,
        followingUserId: 1,
      },
      {
        followedUserId: 3,
        followingUserId: 1,
      },
      {
        followedUserId: 4,
        followingUserId: 2,
      },
      {
        followedUserId: 5,
        followingUserId: 3,
      },
      {
        followedUserId: 6,
        followingUserId: 4,
      },
      {
        followedUserId: 5,
        followingUserId: 5,
      },
      {
        followedUserId: 4,
        followingUserId: 6,
      },
      {
        followedUserId: 4,
        followingUserId: 2,
      },
], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Follows', null, {});
  }
};
