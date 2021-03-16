var express = require('express');
var router = express.Router();
let user = require('../models/user')
let getUser = require('../controllers/users.js')


/* GET logins from specific user */
router.get('/logins', getUser.fetchLogins);

/* GET accounts from specific user */
router.get('/accounts', getUser.fetchAccounts);

/* GET notes from specific user */
router.get('/notes', getUser.fetchNotes);

/* GET news */
router.get('/news', getUser.fetchNews);

/* Generate password for user */
router.get('/gen_passwd', getUser.genPasswd)

module.exports = router;
