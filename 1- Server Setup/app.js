var express = require('express');
var app = express();
var port = 8000;

app.listen(port, (err,req)=>{
    if(err){
        console.log('server error')
    } else{
        console.log('Server Started')
    }
});
