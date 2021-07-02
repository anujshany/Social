const express = require('express');
const app = express();
const port = 8000;

//use express router
app.use('/',require('./routes'))
//setting up the view engine
app.use('view engine','ejs');
app.set('views','./views')


app.listen(port,function(err){
    if(err){
        //doing interpolation using backticks
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Sever is running on port: ${port}`);

});