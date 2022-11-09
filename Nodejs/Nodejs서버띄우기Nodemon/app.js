var express = require('express')
var app = express()

app.get('/', function(req,res){
    res.sendFile(__dirname+"/public/main.html")
})
app.get('/main', function(req,res){
    res.sendFile(__dirname + "/public/main.html")
})
app.use(express.static('public'))
app.listen(3000, function(){
    console.log("start! express server on port 3000")
})
