const express = require('express');
const app = express();
const port = 8000;

app.listen(port,function(err){
    if(err){
        //doing interpolation using backticks
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Sever is running on port: ${port}`);

});