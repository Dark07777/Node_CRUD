var express = require("express");
var app = express();
let path = require('path')
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.get("/", function(req, res){

    res.sendFile(path.join(__dirname,'./public/form.html'));
})
app.post('/addName', function(req, res){
    
    let name= req.body.name
    let age = req.body.age
    console.log(name,age)
    res.redirect('/')
});

app.listen(7777, function(){
   console.log("Example is running on port 7777");
});
