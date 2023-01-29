// Express and Stuff

const express = require('express');
const path = require('path');

// Some More Stuff

const dotenv = require('dotenv').config();

// Mongo

const { MongoClient, ServerApiVersion } = require('mongodb');
const mongo = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

mongo.connect();
module.exports.mongo = mongo;

// Express Webserver

const app = express();
const frontEnd = path.join(__dirname, "..", "app");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(frontEnd));

// ========== BACK END ==========

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

app.get('/', (req, res) => {
    res.send('wssp my g')
});

// ========== FRONT END ==========

app.get('/login', (req, res) => {
  res.sendFile(path.join(frontEnd, "login.html"))
})

app.get('/register', (req, res)=>{
  res.sendFile(path.join(frontEnd, "register.html"))
})

app.get('/home', (req, res)=>{
  res.sendFile(path.join(frontEnd, "login.html"))
})



// APP LISTEN

app.listen(3000, function () {
  console.log('✅ 🫥 Gather is now live on port 3000!');
});

