const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const {Op} = require('sequelize');

const db = require('../../db/models/');

router.delete('/', asyncHandler(async (req, res) => {

    const {item, userId} = req.body;

    await db.Favorite.destroy({
        where: {
            itemId: item.id,
            userId: userId
        }
    });

    const favorites = await db.Favorite.findAll({
        where: {
            userId: userId
        },
    }).then((returned) => returned.map(fav => fav.itemId));

    const favoriteItems = await db.Item.findAll({
        where: {
            id: {
                [Op.in]: favorites
            }
        },
        include: {
            model: db.Comment,
            include: [{
                model: db.User
            }]
        },
        include: {
            model: db.User
        }
    })

    return res.json({favoriteItems, favorites})

}))

router.post('/', asyncHandler(async (req, res) => {

    const {item, userId} = req.body;

    await db.Favorite.create({
            itemId: item.id,
            userId: userId
    });

    const favorites = await db.Favorite.findAll({
        where: {
            userId: userId
        },
    }).then((returned) => returned.map(fav => fav.itemId));

    const favoriteItems = await db.Item.findAll({
        where: {
            id: {
                [Op.in]: favorites
            }
        },
        include: {
            model: db.Comment,
            include: [{
                model: db.User
            }]
        },
        include: {
            model: db.User
        }
    })

    return res.json({favoriteItems, favorites})

}))

module.exports = router;
