var express = require("express");
var app = express();
let path = require('path')
let bodyParser = require('body-parser')
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://geghamshagoyany:chax777@cluster0.zfgsp1x.mongodb.net/sample_mflix';
mongoose.connect(connectionString, { useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))
db.once('open', async () => {
  console.log('Connected to MongoDB!');

  try {
    app.post('/addName', async function (req, res){
    
      let name= req.body.name
      let age = req.body.age
      console.log(name,age)
      res.redirect('/')
var result = await mongoose.connection.db.collection('users').insertMany({ name: "Chax", email: 'Chaxjan@mail.ru',age:420} )
  console.log(result);  
}
  
  
  );


    } catch (error) {
    console.error('Error retrieving customers:', error);
    } finally {
    mongoose.connection.close();
    }
  });

app.get("/", function(req, res){

    res.sendFile(path.join(__dirname,'./public/form.html'));
})


app.listen(7777, function(){
   console.log("Example is running on port 7777");
});




const personSchema = new mongoose.Schema({
name: String,
age: Number,
});

const Person = mongoose.model('Person', personSchema);




mongoose.connect(connectionString);

