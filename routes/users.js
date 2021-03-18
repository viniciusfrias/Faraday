var express = require('express');
var router = express.Router();
let fromUser = require('../controllers/users.js')


/* GET logins from specific user */
router.get('/logins', fromUser.fetchLogins);

/* GET accounts from specific user */
router.get('/accounts', fromUser.fetchAccounts);

/* GET notes from specific user */
router.get('/notes', fromUser.fetchNotes);

/* GET news */
router.get('/news', fromUser.fetchNews);

/* Generate password for user */
router.get('/gen_passwd', fromUser.genPasswd)

// POST new logins to user
router.post('/logins', fromUser.newLogin)

// POST new account to user
router.post('/accounts', fromUser.newAccount)

module.exports = router;
