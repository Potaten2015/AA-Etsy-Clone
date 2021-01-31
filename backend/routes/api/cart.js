const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const {Op} = require('sequelize');

const db = require('../../db/models/');

router.post('/buy', asyncHandler( async (req, res) => {

    const {userId, items} = req.body;

    const myModel = await db.Order.create({userId});

    items.forEach(async el => {
        for(let i = 0; i < el.quantity; i++) {
            console.log(el.cartItem.id)

            await db.OrderItem.create(
                {
                    itemId: el.cartItem.id,
                    orderId: myModel.dataValues.id
                }
            )
        }
    })

    return res.json({ message: 'success' });

}))

module.exports = router;
