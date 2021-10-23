var express = require('express');
var router = express.Router();

// use controller 
let controlerIndex = require('../controller/index');

/* GET home page. */
router.get('/', controlerIndex.home);

/* GET About page available on http://localhost:3000/about . */
router.get('/about', controlerIndex.about);

/* GET Projects page. */
router.get('/projects', controlerIndex.projects);

/* GET Service page. */
router.get('/service', controlerIndex.service);

/* GET Contact page. */
router.get('/contact', controlerIndex.contact);

/* GET Confirm page. */
router.get('/confirm', controlerIndex.confirm);

module.exports = router;
