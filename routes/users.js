const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');
const usersPosts = require('../controllers/user_posts');
const userLogin = require('../controllers/user_login_controller');

router.get('/profile', usersController.profile);
router.get('/posts', usersPosts.post);
router.get('/sign-up', userLogin.signUp);
router.get('/sign-in',userLogin.signIn);
router.post('/create',userLogin.create)

module.exports = router;