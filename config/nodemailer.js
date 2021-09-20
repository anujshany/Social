const nodemailer = require('nodemailer');
const env = require('./enviroment');
const ejs = require('ejs')
const Path = require('path')

let transporter = nodemailer.createTransport(env.smtp);

let renderTemplate = (data,relativePath) =>{
    let mailHTML;
    ejs.renderFile(
        Path.join(__dirname,'../views/mailers', relativePath),
        data,
        function(err,template){
            if(err){console.log('error in rendering template', err); return}

            mailHTML = template;
        }
    )

    return mailHTML;
}

module.exports={
    transporter:transporter,
    renderTemplate: renderTemplate
}