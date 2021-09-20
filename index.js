const express = require('express');
const env = require('./config/enviroment');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require("express-session");
const passport = require('passport')
const passportlocal = require('./config/passport-local-stratergy');
const passportJWT = require('./config/passport-jwt-statergy');
const passportGoogle = require('./config/passport-google-oauth2-stratergy');
const MongoStore = require('connect-mongodb-session')(session);
const sassMiddleware = require('node-sass-middleware');
const flash = require('connect-flash');
const customMware = require('./config/middleware')
const cors = require('cors')


//setup the chat server to be used with socket.io
const chatServer = require('http').Server(app);
const chatSockets = require('./config/chat_sockets').chatSockets(chatServer);
chatServer.listen(5000);
console.log('Chat server is listening on port 5000');
const path = require('path')


app.use(sassMiddleware({
    src: path.join(__dirname,env.asset_path,'scss'),
    dest: path.join(__dirname,env.asset_path,'css'),
    debug:true,
    outputStyle:'extended',
    prefix:'/css'
}))
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static(env.asset_path))
// make the upload path available to the browser
app.use('/uploads',express.static(__dirname + '/uploads'));
app.use(expressLayouts);
//extract style and scripts from subpages into the layout
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)
app.use(cors())

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
//mongo store session is used to store the cookie of the session
app.use(session({
    name:'wecode',
    //TODO change the secret before deployment
    secret: env.session_cookie_key,
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoremove :'disabled'
        },
        function(err){
            console.log(err||'connect mongodb setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);
// use express router
app.use('/', require('./routes'));



app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
