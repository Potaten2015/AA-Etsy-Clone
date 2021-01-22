//MIDDLEWARE IMPORTS
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
//OTHER IMPORTS
//GET ENVIRONMENT VARIABLES
const {
    environment
} = require('./config');
const isProduction = environment === 'production';

//CREATE EXPRESS APP
const app = express();
//LOG REQUEST INFORMATION
app.use(morgan('dev'));
//PARSE COOKIES AND JSON REQUEST BODIES
app.use(cookieParser());
app.use(express.json());

// Security Middleware
if (!isProduction) {
    // enable cors only in development
    // allows sharing of resources across different sources (domain, scheme, or port)
    app.use(cors());
}
// helmet helps set a variety of headers to better secure your app
app.use(helmet({
    contentSecurityPolicy: false
}));

// Set the _csrf token and create req.csrfToken method
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            // Decides whether to send cookies with requests made by my site
            sameSite: isProduction && "Lax",
            httpOnly: true,
        },
    })
);

// backend/app.js
const routes = require('./routes');

// ...

app.use(routes); // Connect all the routes

// ...

module.exports = app;
