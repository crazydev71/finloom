const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

require('./account.routes.js')(router);
require('./account_list.routes.js')(router);
require('./industry.routes.js')(router);
require('./role.routes.js')(router);
require('./contact.routes.js')(router);
require('./contact_list.routes.js')(router);
require('./contact_email.routes.js')(router);


module.exports = router;