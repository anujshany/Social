const Like = require("../models/like")
const Post = require("../models/post")
const Comment = require("../models/comment")

module.exports.toggleLike = async function(req,res){
    try {
        
        //likes/toggle/?id = abcdef&type=Post
        let likeable;
        let deleted = falase;

        if(req.query.type =="Post"){
            likeable = await Post.findById(req.query.id)
        }else{

        }
        
        

    } catch (err) {
        console.log(err);
        return res.json(500,{
            message:'Internal Server Error'
        })
    }
}