const nodeMailer = require('../config/nodemailer')

// this is another way of exporting a method
exports.newComment = (comment) =>{
    console.log('inside new comment mailer',comment);

    nodeMailer.transporter.sendMail({
        from:'anuj@weconnect.in',
        to: comment.user.email,
        subject:'New Comment Published',
        html:'<h1>Your comment is now published</h1>'
    },(err,info)=>{
        if(err){
            console.log('Error in sending mail',err);
            return;
        }
        console.log('Message Sent',info);
        return;
    });
}