'use strict';
const bcrypt = require('bcryptjs');
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 30],
                isNotEmail(value) {
                    if (Validator.isEmail(value)) {
                        throw new Error('Cannot be an email.');
                    }
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 256]
            },
        },
        hashedPassword: {
            type: DataTypes.STRING.BINARY,
            allowNull: false,
            validate: {
                len: [60, 60]
            },
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 1000]
            }
        }
    }, {
        defaultScope: {
            attributes: {
                exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
            },
        },
        scopes: {
            currentUser: {
                attributes: { exclude: ['hashedPassword'] },
            },
            loginUser: {
                attributes: {},
            },
        },
    });
    User.associate = function(models) {
        User.hasMany(models.Comment, {foreignKey: 'userId'});
        const columnMapping1 = {
            through: 'Favorite',
            otherKey: 'itemId',
            foreignKey: 'userId'
        }
        User.belongsToMany(models.Favorite, columnMapping1)
        User.hasMany(models.Order, {foreignKey: 'userId'})
        const columnMapping2 = {
            through: 'Follow',
            otherKey: 'followingUserId',
            foreignKey: 'followedUserId',
            as: 'followedUser'
        }
        User.belongsToMany(models.User, columnMapping2)
        const columnMapping3 = {
            through: 'Follow',
            otherKey: 'followedUserId',
            foreignKey: 'followingUserId',
            as: 'followingUser'
        }
        User.belongsToMany(models.User, columnMapping3)
        User.hasMany(models.Item, {foreignKey: 'sellerId'})

    };
    User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
        const { id, username, email } = this; // context will be the User instance
        return { id, username, email };
    };
    User.prototype.validatePassword = function(password) {
        return bcrypt.compareSync(password, this.hashedPassword.toString());
    };
    User.getCurrentUserById = async function(id) {
        return await User.scope('currentUser').findByPk(id);
    };
    User.login = async function({ credential, password }) {
        const { Op } = require('sequelize');
        const user = await User.scope('loginUser').findOne({
            where: {
                [Op.or]: {
                    username: credential,
                    email: credential,
                },
            },
        });
        if (user && user.validatePassword(password)) {
            return await User.scope('currentUser').findByPk(user.id);
        }
    };
    User.signup = async function({ username, email, password, bio }) {
        const hashedPassword = bcrypt.hashSync(password);
        const user = await User.create({
            username,
            email,
            hashedPassword,
            bio
        });
        return await User.scope('currentUser').findByPk(user.id);
    };
    return User;
};
