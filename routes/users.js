var express = require('express');
var router = express.Router();
let usersController = require('../controller/user');
let passport = require('passport');

router.get('/', function(req, res, next) {  
  res.render('users', { 
    title: 'Users',
    userName: req.user ? req.user.username : ''
  });
});

router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

router.get('/signout', usersController.signout);

module.exports = router;


/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

*/
