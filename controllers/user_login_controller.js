const User = require('../models/user')

module.exports.profile = function(req, res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(user){
                return res.render('user',{
                    title:"User Profile",
                    user: user
                })
            }
            return res.redirect('/users/sign-in')
        })
    }else{
        return res.redirect('/users/sign-in')
    }
 }
 
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
    //steps to authenticate
    // find the user
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('error in finding user in signing in');return}
        // handle user found
        if(user){

            // handle incorrect passwords
            if(user.password != req.body.password){
                return res.redirect('back');
            }
            // handle session creation
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile')

        }else{
            // handle incorrect passwords
            return res.redirect('back');
        }

    })};

module.exports.logout = function(req,res){
        res.cookie('user_id', null)
        return res.redirect('back');
        }
