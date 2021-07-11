const express = require('express');
const router = express.Router();

const usersPosts = require('../controllers/user_posts');
const userLogin = require('../controllers/user_login_controller');

router.get('/profile',userLogin.profile);
router.get('/posts', usersPosts.post);
router.get('/sign-up', userLogin.signUp);
router.get('/sign-in',userLogin.signIn);
router.post('/create',userLogin.create);
router.post('/create-session',userLogin.createSession);
router.post('/logout',userLogin.logout);

module.exports = router;