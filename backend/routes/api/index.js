// Create an express Router
const router = require('express').Router();

// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.get('/set-token-cookie', asyncHandler(async(req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        },
    })
    setTokenCookie(res, user);
    return res.json({ user });
}));


router.post('/test', function(req, res) {
    res.json({
        requestBody: req.body
    });
});

// export the router
module.exports = router;