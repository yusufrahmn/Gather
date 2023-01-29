// Express and Stuff

const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');

// Mongo

const { MongoClient, ServerApiVersion } = require('mongodb');
const mongo = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

mongo.connect();
module.exports.mongo = mongo;

// Express Webserver

const app = express();
const initialPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(initialPath));

app.get('/login', (req, res) => {
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

