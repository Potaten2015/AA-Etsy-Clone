'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Items', [
     {
    name: 'Chimes',
    shortDescription: 'Some beautiful jangly chimes for the wind to play with.',
    longDescription: 'Windchimes made by my mom, who has never made windchimes before but somehow managed to create these beautiful things. When the wind rises they sing like clashing pots. What a wonderful sound.',
    price: 30.00,
    sellerId: 1,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Dragonfruit',
    shortDescription: 'Tasty tasty fruit',
    longDescription: 'I started growing these for fun but now I have far too many, so I have chosen to sell them. Goodbye my dear dragonfruits.',
    price: 7.00,
    sellerId: 2,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Ducks',
    shortDescription: 'QUACK.',
    longDescription: 'Lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and lots of DUCKS.',
    price: 100.00,
    sellerId: 3,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Fake Plant Things',
    shortDescription: 'Spiky fake plants. Almost kind of pretty.',
    longDescription: 'I made these to ward of predators but I think they look decent as decorations as well.',
    price: 65.99,
    sellerId: 4,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Picure Frames',
    shortDescription: 'Gorgeous multicolor frames.',
    longDescription: 'I wove these by hand over three years. Each one took me just under 300 hours and every second was an absolute joy. ',
    price: 500.00,
    sellerId: 0,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Garden Stuff',
    shortDescription: 'Just random stuff. For the garden',
    longDescription: 'I do not even have a garden. Never have. Not sure I ever wanted one. But here is some stuff anyway' ,
    price: 12.00,
    sellerId: 1,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Gnome',
    shortDescription: 'Short bearded lawn goblins.',
    longDescription: 'I have a fear of gnomes, but I tried to overcome it by building these. It did not work and now there are too many of them. Please buy them all.',
    price: 34.00,
    sellerId: 5,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Grapefruit',
    shortDescription: 'Sour. Not at all like grapes.',
    longDescription: 'They are so large. They have consumed the entirety of my counter space. .',
    price: 643.00,
    sellerId: 6,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Jackfruit (not to be confused with Jillfruit)',
    shortDescription: 'Some beautiful jangly chimes for the wind to play with.',
    longDescription: 'Windchimes made by my mom, who has never made windchimes before but somehow managed to create these beautiful things. When the wind rises they sing like clashing pots. What a wonderful sound.',
    price: 5634.00,
    sellerId: 4,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Keychain',
    shortDescription: 'Some beautiful jangly chimes for the wind to play with.',
    longDescription: 'Windchimes made by my mom, who has never made windchimes before but somehow managed to create these beautiful things. When the wind rises they sing like clashing pots. What a wonderful sound.',
    price: 6.04,
    sellerId: 3,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'LED Light Strip',
    shortDescription: 'Some beautiful jangly chimes for the wind to play with.',
    longDescription: 'Windchimes made by my mom, who has never made windchimes before but somehow managed to create these beautiful things. When the wind rises they sing like clashing pots. What a wonderful sound.',
    price: 345.00,
    sellerId: 5,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'COOL NEON LIGHT',
    shortDescription: 'Some beautiful jangly chimes for the wind to play with.',
    longDescription: 'Windchimes made by my mom, who has never made windchimes before but somehow managed to create these beautiful things. When the wind rises they sing like clashing pots. What a wonderful sound.',
    price: 3454.00,
    sellerId: 2,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Octopus',
    shortDescription: 'Some beautiful jangly chimes for the wind to play with.',
    longDescription: 'Windchimes made by my mom, who has never made windchimes before but somehow managed to create these beautiful things. When the wind rises they sing like clashing pots. What a wonderful sound.',
    price: 1.00,
    sellerId: 3,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Handmade Rug',
    shortDescription: 'Some beautiful jangly chimes for the wind to play with.',
    longDescription: 'Windchimes made by my mom, who has never made windchimes before but somehow managed to create these beautiful things. When the wind rises they sing like clashing pots. What a wonderful sound.',
    price: 546.34,
    sellerId: 0,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Shoe Rack for Sick Kicks',
    shortDescription: 'Some beautiful jangly chimes for the wind to play with.',
    longDescription: 'Windchimes made by my mom, who has never made windchimes before but somehow managed to create these beautiful things. When the wind rises they sing like clashing pots. What a wonderful sound.',
    price: 90.67,
    sellerId: 4,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Ultra Mini Shovel!',
    shortDescription: 'Some beautiful jangly chimes for the wind to play with.',
    longDescription: 'Windchimes made by my mom, who has never made windchimes before but somehow managed to create these beautiful things. When the wind rises they sing like clashing pots. What a wonderful sound.',
    price: 87.87,
    sellerId: 1,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
