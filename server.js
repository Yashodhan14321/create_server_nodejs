var express = require('express')
var app = express()
var port = 3000


//app can listen on any port mow running on port 3000
app.listen(port , ()=>{console.log(`Listening on Port ${port} ....`)})