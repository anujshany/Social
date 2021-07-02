const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');


console.log("Router Loaded")

router.get('/',homeController.home);
router.use('/users',require('./users'));

//for any further routes, acces from here
//router.use('/routerName',require('./routerfile'))

module.exports = router;