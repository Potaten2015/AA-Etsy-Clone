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
    sellerId: 6,
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
    longDescription: 'They are so large. They have consumed the entirety of my counter space.',
    price: 643.00,
    sellerId: 6,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Jackfruit (not to be confused with Jillfruit)',
    shortDescription: 'A larfe fruit. Named after my uncle Jack',
    longDescription: 'It comes in a box, which is pretty much the main feature here. If you have a cat the cat can sit. If you have things to carry the box can assist. Trust me, come for the fruit, stay for the box.',
    price: 5634.00,
    sellerId: 4,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Keychain',
    shortDescription: 'An off the chain keychain.',
    longDescription: 'You can hold keys on keys. As many keys as you can think of. Think of 59 keys. You bet this chain can hold them',
    price: 6.04,
    sellerId: 3,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'LED Light Strip',
    shortDescription: 'Bright colorful lights.',
    longDescription: 'Do you like to party? Well these are the lights for YOU. They have RED, GREEN, BLUE, and EVERY COLOR BETWEEN.',
    price: 345.00,
    sellerId: 5,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'COOL NEON LIGHT',
    shortDescription: 'This light is an absolute vibe.',
    longDescription: 'Windchimes made by my mom, who has never made windchimes before but somehow managed to create these beautiful things. When the wind rises they sing like clashing pots. What a wonderful sound.',
    price: 3454.00,
    sellerId: 2,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Octopus',
    shortDescription: "What's better than 7 legs??? 8!",
    longDescription: 'This little guy is a land octpus that sits in your yard and looks pretty. ',
    price: 1.00,
    sellerId: 0,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Handmade Rug',
    shortDescription: 'For looking at, not stepping on.',
    longDescription: 'A wonderful authentic rug.',
    price: 546.34,
    sellerId: 6,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Shoe Rack for Sick Kicks',
    shortDescription: 'Let your shoes rest on this masterpiece.',
    longDescription: 'I have 3000 pairs of shoes. I literally live in a house of shoes because I spent all my money on shoes. This shoe holder is definitely the pinnacle of shoe reacks. Your kicks will love you. They will carress your feet in ways that they never have before.' ,
    price: 90.67,
    sellerId: 4,
    thumbnail: '/photos/100_3076.JPG',
    photos: ['/photos/100_3076.JPG','/photos/100_3076.JPG','/photos/100_3076.JPG', '/photos/100_3076.JPG']
  },
  {
    name: 'Ultra Mini Shovel!',
    shortDescription: 'Have you ever seen a shovel so small.',
    longDescription: 'Do you like to dig holes? Big holes, small holes, medium holes? Holes for plants or seeds or just...holes? Well this little guy can help you out. He digs holes. So many holes. My whole yard is covered in them, and now your can be too! With this tiny tiny shovel.',
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
