
const development = {
    name : 'development',
    asset_path : './assets' ,
    session_cookie_key: 'something',
    db: 'wecode_devlopment',
    smtp: {
        service:'gmail',
        host:"smtp.gmail.com",
        port:'587',
        secure:false,
        auth:{
            user:'weconnectmailhelp',
            pass:'anuj@2001'
        }
    },
    google_client_id: "223981529790-edb0qk5qqerf9tki62t2bubqitaad26r.apps.googleusercontent.com",
    google_clientSecret:"w8P7PVYeHfMDU6cMiUi2TzCV",
    google_callbackURL:"http://localhost:8000/users/auth/google/callback",
    jwt_secret: 'wecode',
}

const production = {
    name : 'production'
}

module.exports = development;
