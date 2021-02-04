const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const {Op} = require('sequelize');

const db = require('../../db/models/');

router.delete('/', asyncHandler(async (req, res) => {

    const {followedUserId, followingUserId} = req.body;

    await db.Follow.destroy({
        where: {
            followedUserId: followedUserId,
            followingUserId: followingUserId
        }
    });

    const follows = await db.Follow.findAll({
        where: {
            followingUserId: followingUserId
        },
    }).then((returned) => returned.map(pair => pair.followedUserId));

    return res.json({follows})

}))

router.post('/', asyncHandler(async (req, res) => {

    const {followedUserId, followingUserId} = req.body;

    await db.Follow.create({
            followedUserId: followedUserId,
            followingUserId: followingUserId
    });

    const follows = await db.Follow.findAll({
        where: {
            followingUserId: followingUserId
        },
    }).then((returned) => returned.map(pair => pair.followedUserId));

    return res.json({follows})

}))

module.exports = router;
