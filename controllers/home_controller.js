const { request } = require("express");
const Post = require("../models/post");
module.exports.home = function(req, res){
    //console.log(req.cookies);
    //res.cookie('user_id',25);

    //Post.find({},function(err,posts){
    //     return res.render('home', {
    //         title: "WeConnect | Home",
    //         posts: posts
    //     });
    // });

    //Populate the user of each post
    Post.find({}).populate('user').exec((err,posts)=>{
        return res.render('home',{
            title:"WeCode | Home",
            posts: posts
        })
    })
    
}

// module.exports.actionName = function(req, res){}