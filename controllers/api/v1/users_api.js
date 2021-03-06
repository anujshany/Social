const User = require('../../../models/user')
const env = require('../../../config/enviroment');
const jwt = require('jsonwebtoken')

module.exports.createSession = async function(req,res){
    try{
        let user = await User.findOne({email:req.body.email});

        if(!user || user.password != req.body.password ){
            return res.json(422,{
                message:"Invalid Login Details"
            });
        }

        return res.json(200,{
            message:"Sign In Successful, here is your token keep it safe!",
            data:{
                token: jwt.sign(user.toJSON(),env.jwt_secret,{expiresIn :'100000'})
            }
        })

    }catch(err){
        console.log("*****",err)
        // req.flash('error',err);
        return res.json(500,{
            message:"Internal Server Error"
        })
    }
    
}
