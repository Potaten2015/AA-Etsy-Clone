const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const {Op} = require('sequelize');

const db = require('../../db/models/');

router.post('/', asyncHandler( async (req, res) => {

    const {content, title, rating, itemId, userId} = req.body;

    const newComment = await db.Comment.create({content, title, rating, itemId, userId});

    return res.json({message: "SUCCESS"});

}))

router.delete('/', asyncHandler( async (req, res) => {

    const {commentId} = req.body;

    await db.Comment.destroy({
        where: {
            id: commentId
        }
    });

    return res.json({message: "SUCCESS"});

}))

module.exports = router;
