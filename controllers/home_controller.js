const { request } = require("express");
const Post = require("../models/post");
const User = require("../models/user")


module.exports.home = async function(req, res){
    try{
        //Populate the user of each post
        let posts = await Post.find({})
        .populate('user')
        .populate({
            path:"comments",
            populate:{
                path:'user'
            }
        });

        let users = await User.find({});

        return res.render('home',{
            title:"WeConnect | Home",
            posts:posts,
            all_users:users 
        });

    }catch(err){
        console.log('Error',err);
        return;
    }

    


    
}

// module.exports.actionName = function(req, res){}

// Using then 
//Post.find({}).populate('comments').then(function());

// Promises
//let posts = Post.find({}).populate('comments').exec();
//posts.then()
