const nodemailer = require('nodemailer');
const ejs = require('ejs')
const Path = require('path')

let transporter = nodemailer.createTransport({
    service:'gmail',
    host:"smtp.gmail.com",
    port:'587',
    secure:false,
    auth:{
        user:'weconnectmailhelp',
        pass:'anuj@2001'
    }
});

let renderTemplate = (data,relativePath) =>{
    let mailHTML;
    ejs.renderFile(
        Path.join(__dirname,'../views/mailers', relativePath),
        data,
        function(err,template){
            if(err){console.log('error in rendering template'); return}

            mailHTML = template;
        }
    )

    return mailHTML;
}

module.exports={
    transporter:transporter,
    renderTemplate: renderTemplate
}