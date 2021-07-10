const User = require('../models/user')

//render the sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title:"WeCode | Sign Up"
    })
}
//render the sign in page

module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title:"WeCode | Sign In"
    })
}

// get the sign-up data
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('error in finding user in signing up');return}

        if(!user){
            User.create(req.body, function(err,user){
                if(err){console.log('error in signing up');return}

                return res.redirect('/users/sign-in')
            })
        } else{
            return res.redirect('/users/sign-in')
        }
    })

}

//sign in and create a session for the user

module.exports.createSession = function(req,res){
    //TODO Later
}