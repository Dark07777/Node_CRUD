// var express = require("express");
// var app = express();
// let path = require('path')
// let bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())
// app.use(express.static('public'))
// app.get("/", function(req, res){

//     res.sendFile(path.join(__dirname,'./public/form.html'));
// })
// app.post('/addName', function(req, res){
    
//     let name= req.body.name
//     let age = req.body.age
//     console.log(name,age)
//     res.redirect('/')
// });

// app.listen(7777, function(){
//    console.log("Example is running on port 7777");
// });


const mongoose = require('mongoose');

// Replace the connection string with your MongoDB connection string
const connectionString = 'mongodb+srv://geghamshagoyany:chax777@cluster0.zfgsp1x.mongodb.net/?retryWrites=true&w=majority';


// Connect to MongoDB
mongoose.connect(connectionString, { useUnifiedTopology: true });

// Check the connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', async () => {
    console.log('Connected to MongoDB!');
  
    try {
      // Retrieve data from the Person collection
      const people = await Person.find(); // Retrieve all documents
  
      console.log('Retrieved data:', people);
    } catch (error) {
      console.error('Error retrieving data:', error);
    } finally {
      // Make sure to close the connection when you're done
      mongoose.connection.close();
    }
  });

// Define a Mongoose schema and model for the Person collection
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model('Person', personSchema);

// Replace the connection string with your MongoDB connection string

// Connect to MongoDB
mongoose.connect(connectionString);

// Check the connection
