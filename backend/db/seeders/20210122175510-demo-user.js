'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
                email: 'demo@user.io',
                username: 'Demo-lition',
                hashedPassword: bcrypt.hashSync('password'),
                bio: 'This is my awesome bio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis a magna et viverra. Nunc a pharetra felis, quis pretium sapien. Donec posuere vestibulum arcu a feugiat. Donec eu fermentum neque, sed dapibus sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In scelerisque finibus elit, ac luctus lectus. In elementum fermentum mauris. Suspendisse id bibendum felis. Sed sed ultricies arcu. Donec accumsan dolor ac rhoncus rhoncus. Ut mollis nunc eu nulla efficitur tristique. Pellentesque consectetur lorem ut ante tincidunt, ut sagittis nunc accumsan. Duis congue libero sed neque dapibus pharetra. Donec ut eleifend ante. Vivamus rhoncus, dui eu pulvinar mattis, nibh massa aliquam elit, lobortis aliquam ante sapien vel metus. Nulla vitae fermentum neque.',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: faker.internet.email(),
                username: 'FakeUser1',
                hashedPassword: bcrypt.hashSync(faker.internet.password()),
                bio: 'This is my awesome bio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis a magna et viverra. Nunc a pharetra felis, quis pretium sapien. Donec posuere vestibulum arcu a feugiat. Donec eu fermentum neque, sed dapibus sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In scelerisque finibus elit, ac luctus lectus. In elementum fermentum mauris. Suspendisse id bibendum felis. Sed sed ultricies arcu. Donec accumsan dolor ac rhoncus rhoncus. Ut mollis nunc eu nulla efficitur tristique. Pellentesque consectetur lorem ut ante tincidunt, ut sagittis nunc accumsan. Duis congue libero sed neque dapibus pharetra. Donec ut eleifend ante. Vivamus rhoncus, dui eu pulvinar mattis, nibh massa aliquam elit, lobortis aliquam ante sapien vel metus. Nulla vitae fermentum neque.',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: faker.internet.email(),
                username: 'FakeUser2',
                hashedPassword: bcrypt.hashSync(faker.internet.password()),
                bio: 'This is my awesome bio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis a magna et viverra. Nunc a pharetra felis, quis pretium sapien. Donec posuere vestibulum arcu a feugiat. Donec eu fermentum neque, sed dapibus sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In scelerisque finibus elit, ac luctus lectus. In elementum fermentum mauris. Suspendisse id bibendum felis. Sed sed ultricies arcu. Donec accumsan dolor ac rhoncus rhoncus. Ut mollis nunc eu nulla efficitur tristique. Pellentesque consectetur lorem ut ante tincidunt, ut sagittis nunc accumsan. Duis congue libero sed neque dapibus pharetra. Donec ut eleifend ante. Vivamus rhoncus, dui eu pulvinar mattis, nibh massa aliquam elit, lobortis aliquam ante sapien vel metus. Nulla vitae fermentum neque.',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: 'taten@gmail.com',
                username: 'taten',
                hashedPassword: bcrypt.hashSync('password'),
                bio: 'This is my awesome bio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis a magna et viverra. Nunc a pharetra felis, quis pretium sapien. Donec posuere vestibulum arcu a feugiat. Donec eu fermentum neque, sed dapibus sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In scelerisque finibus elit, ac luctus lectus. In elementum fermentum mauris. Suspendisse id bibendum felis. Sed sed ultricies arcu. Donec accumsan dolor ac rhoncus rhoncus. Ut mollis nunc eu nulla efficitur tristique. Pellentesque consectetur lorem ut ante tincidunt, ut sagittis nunc accumsan. Duis congue libero sed neque dapibus pharetra. Donec ut eleifend ante. Vivamus rhoncus, dui eu pulvinar mattis, nibh massa aliquam elit, lobortis aliquam ante sapien vel metus. Nulla vitae fermentum neque.',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: 'knight@gmail.com',
                username: 'knight',
                hashedPassword: bcrypt.hashSync('password'),
                bio: 'This is my awesome bio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis a magna et viverra. Nunc a pharetra felis, quis pretium sapien. Donec posuere vestibulum arcu a feugiat. Donec eu fermentum neque, sed dapibus sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In scelerisque finibus elit, ac luctus lectus. In elementum fermentum mauris. Suspendisse id bibendum felis. Sed sed ultricies arcu. Donec accumsan dolor ac rhoncus rhoncus. Ut mollis nunc eu nulla efficitur tristique. Pellentesque consectetur lorem ut ante tincidunt, ut sagittis nunc accumsan. Duis congue libero sed neque dapibus pharetra. Donec ut eleifend ante. Vivamus rhoncus, dui eu pulvinar mattis, nibh massa aliquam elit, lobortis aliquam ante sapien vel metus. Nulla vitae fermentum neque.',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: 'hall@gmail.com',
                username: 'hall',
                hashedPassword: bcrypt.hashSync('password'),
                bio: 'This is my awesome bio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis a magna et viverra. Nunc a pharetra felis, quis pretium sapien. Donec posuere vestibulum arcu a feugiat. Donec eu fermentum neque, sed dapibus sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In scelerisque finibus elit, ac luctus lectus. In elementum fermentum mauris. Suspendisse id bibendum felis. Sed sed ultricies arcu. Donec accumsan dolor ac rhoncus rhoncus. Ut mollis nunc eu nulla efficitur tristique. Pellentesque consectetur lorem ut ante tincidunt, ut sagittis nunc accumsan. Duis congue libero sed neque dapibus pharetra. Donec ut eleifend ante. Vivamus rhoncus, dui eu pulvinar mattis, nibh massa aliquam elit, lobortis aliquam ante sapien vel metus. Nulla vitae fermentum neque.',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: 'steve@gmail.com',
                username: 'steve',
                hashedPassword: bcrypt.hashSync('password'),
                bio: 'This is my awesome bio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis a magna et viverra. Nunc a pharetra felis, quis pretium sapien. Donec posuere vestibulum arcu a feugiat. Donec eu fermentum neque, sed dapibus sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In scelerisque finibus elit, ac luctus lectus. In elementum fermentum mauris. Suspendisse id bibendum felis. Sed sed ultricies arcu. Donec accumsan dolor ac rhoncus rhoncus. Ut mollis nunc eu nulla efficitur tristique. Pellentesque consectetur lorem ut ante tincidunt, ut sagittis nunc accumsan. Duis congue libero sed neque dapibus pharetra. Donec ut eleifend ante. Vivamus rhoncus, dui eu pulvinar mattis, nibh massa aliquam elit, lobortis aliquam ante sapien vel metus. Nulla vitae fermentum neque.',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete('Users', {
            username: {
                [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2']
            }
        }, {});
    }
};
