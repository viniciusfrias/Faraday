var express = require('express');
var router = express.Router();
let user = require('../models/user')
let getUser = require('../controllers/users.js')


/* GET logins from specific user */
router.get('/logins', getUser.fetchLogin);

// Generate password for user
router.get('/gen_passwd', getUser.genPasswd)

module.exports = router;