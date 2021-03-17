var express = require('express');
var router = express.Router();
let passport = require('passport')
let user = require('../models/user')

//check for logged in user
function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.user)
  res.render('index', { title: 'Faraday', user: req.user });
});

// router.get("/login", function(req, res) {
//   res.render('dashboard', {user: req.user})
// })

router.get('/auth/google', passport.authenticate("google", { scope: ["profile", "email"]}))

router.get("/oauth2callback", passport.authenticate("google", 
{
  successRedirect: "/dashboard", 
  failureRedirect: "/"
}))

router.get('/dashboard', isLoggedIn,function (req,res) {
  console.log(req.user)
  res.render('dashboard', {user: req.user});
})

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/dashboard");
});

module.exports = router;
