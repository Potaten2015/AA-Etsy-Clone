const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const db = require('../../db/models/');

router.get('/populate', asyncHandler(async (req, res) => {

    const splashItems = await db.Item.findAll({limit: 16});

    return res.json({splashItems})

}))

module.exports = router;
