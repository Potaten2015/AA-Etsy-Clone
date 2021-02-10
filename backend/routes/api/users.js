const express = require('express')
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const validateSignup = [
    check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
    check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
    check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
    check('bio')
    .exists({ checkFalsy: true})
    .withMessage('Please provide a bio.')
    .isLength({ max: 1000})
    .withMessage('Current maximum bio length is 1000 characters.'),
    handleValidationErrors,
];

// Sign up
router.post(
    '',
    validateSignup,
    asyncHandler(async(req, res) => {
        const { email, password, username, bio } = req.body;
        console.log(bio)
        const user = await User.signup({ email, username, password, bio });

        await setTokenCookie(res, user);

        return res.json({
            user,
        });
    }),
);



module.exports = router;
