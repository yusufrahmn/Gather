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
const initialPath = path.join(__dirname, "public");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(initialPath));

// ========== BACK END ==========

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/login', require('./routes/loginRoutes'));
app.use('/api/register', require('./routes/registerRoutes'));

app.get('/', (req, res) => {
    res.send('wssp my g')
});

// ========== FRONT END ==========

app.get('/login', (req, res) => {
  res.sendFile(path.join(initialPath, "login.html"))
})

app.get('/register', (req, res)=>{
  res.sendFile(path.join(initialPath, "register.html"))
})

app.get('/home', (req, res)=>{
  res.sendFile(path.join(initialPath, "login.html"))
})



// APP LISTEN

app.listen(3000, function () {
  console.log('✅ 🫥 Gather is now live on port 3000!');
});

