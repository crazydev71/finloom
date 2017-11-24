'use strict';
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Set configuration from env
require('dotenv').config({path: path.join(__dirname, '/.env')});

// Get our API routes
const apiRoutes = require('./routes');
const app = express();

// App configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', apiRoutes);

// Catch all other routes and return the index file
app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Create HTTP server
const server = http.createServer(app);

module.exports = server;
