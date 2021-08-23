const express = require('express');
const router = express.Router();
const passport = require('passport')

const usersPosts = require('../controllers/user_posts');
const userLogin = require('../controllers/user_login_controller');

router.get('/profile/:id',passport.checkAuthentication, userLogin.profile);
router.post('/update/:id',passport.checkAuthentication, userLogin.update);
router.get('/posts', usersPosts.post);
router.get('/sign-up', userLogin.signUp);
router.get('/sign-in',userLogin.signIn);
router.post('/create',userLogin.create)
//use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
),userLogin.createSession)

router.get('/sign-out',userLogin.destroySession);


router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:"/users/sign-in"}), userLogin.createSession);


module.exports = router;