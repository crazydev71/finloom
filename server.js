'use strict';
const server = require('./server/index');

/**
 * Listen on provided port, on all network interfaces.
 */
const port = process.env.PORT || 3200;
server.listen(port, () => console.log(`API running on localhost:${port}`));