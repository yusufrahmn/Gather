const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');

//
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;
const mongo = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

mongo.connect();

 

//

const app = express();

let initialPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(initialPath));

app.get('/login∂', (req, res) => {
  res.sendFile(path.join(initialPath, "login.html"))
})

app.get('/register', (req, res)=>{
  res.sendFile(path.join(initialPath, "register.html"))
})

app.get('/home', (req, res)=>{
  res.sendFile(path.join(initialPath, "login.html"))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


module.exports={
  mongo: mongo
}

app.get('/login', (req, res) => {
  res.json({ message: 'Login time'})
});

app.get('/register', (req, res) => {
  res.json({message: 'Register time'})
});

app.get('/home',(req, res) => {
  res.json({message: 'Home page'})
})