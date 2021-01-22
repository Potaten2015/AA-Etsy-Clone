// Create an express Router
const router = require('express').Router();

router.post('/test', function (req, res) {
    res.json({
        requestBody: req.body
    });
});

// export the router
module.exports = router;
