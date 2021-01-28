const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const {Op} = require('sequelize');

const db = require('../../db/models/');

router.post('/populate', asyncHandler(async (req, res) => {

    const userId = req.body.id;

    // const recentlyVisited = await Item.findAll({
    //     where: {
    //         id: {
    //             [Op.in]: []
    //         }
    //     }
    // })

    const recentlyVisited = [];

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
        }
    })

    const newlyAddedItems = await db.Item.findAll({
        order: [
            ['createdAt', 'DESC']
        ],
        limit: 5
    })

    const alreadyLoaded = [...favoriteItems.map(item => item.id), ...newlyAddedItems.map(item => item.id)];

    const browseItems = await db.Item.findAll({
        where: {
            id: {
                [Op.notIn]: alreadyLoaded
            }
        }
    })

    return res.json({favoriteItems, newlyAddedItems, browseItems, recentlyVisited})

}))

module.exports = router;
