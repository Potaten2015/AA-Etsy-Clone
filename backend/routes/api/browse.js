const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const {Op} = require('sequelize');

const { Item, Favorite } = require('../../db/models');

router.post('/populate', asyncHandler(async (req, res) => {

    const {userId} = req.body;
    console.log(userId)

    // const recentlyVisited = await Item.findAll({
    //     where: {
    //         id: {
    //             [Op.in]: []
    //         }
    //     }
    // })

    const recentlyVisited = [];

    let favorites = await Favorite.findAll({
        where: {
            userId: userId
        },
        include: {
            model: 'Item'
        }
    });

    const favoriteItems = favorites.map((favorite) => favorite.Item);

    const newlyAdded = await Item.findAll({
        order: [
            ['createdAt', 'DESC']
        ],
        limit: 5
    })

    const alreadyLoaded = [...favoriteItems.map(item => item.id), ...newlyAdded.map(item => item.id)];

    const browseItems = await Item.findAll({
        where: {
            id: {
                [Op.notIn]: alreadyLoaded
            }
        }
    })

    return res.json({favoriteItems, newlyAddedItems, browseItems, recentlyVisited})

}))

module.exports = router;
