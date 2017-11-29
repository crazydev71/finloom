'use strict';
const path          = require('path');
// Set configuration from env
require('dotenv').config({path: path.join(__dirname, '/.env')});

// Get dependencies
const express       = require('express');
const http          = require('http');
const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');
const session       = require('express-session');
const app           = express();

// Get our API routes
const apiRoutes     = require('./routes');
const passport      = require('./config/passport');

// App configuration
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({ 
  secret: process.env.SECRET || 'finloom',
  resave: true, 
  saveUninitialized: true ,
  cookie: { maxAge : 3600000 * 2 }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', apiRoutes);

// Catch all other routes and return the index file
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Create HTTP server
const server = http.createServer(app);

module.exports = server;
