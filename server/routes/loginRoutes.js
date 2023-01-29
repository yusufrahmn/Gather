const express = require('express');
const router = express.Router();

const { mongo } = require('../index');
const { ObjectId } = require('mongodb');
const collection = mongo.db("GatherDB").collection("Users");

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.get('/', async (req, res) => {
    res.send('login');
});

router.post('/', async (req, res) => {
    //
});

router.put('/', async (req, res) => {
    //
});

router.delete('/', async (req, res) => {
    //
});

module.exports = router;