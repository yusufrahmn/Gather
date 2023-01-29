const express = require('express');
const router = express.Router();

const { mongo } = require('../index');
const { ObjectId } = require('mongodb');
const collection = mongo.db("GatherDB").collection("Users");

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.get('/', async (req, res) => {
    res.status(200).json({ message: "Get users" });
});

// GENERATE TOKEN (FOR LOGIN AND REGISTRATION)

const generateToken = (id) => {
    return JsonWebTokenError.sign({ id }. process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

// LOG IN EXISTING USER

router.post('/Login', async (req, res) => {
    let { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Please enter both email and password." });

    let user = await collection.findOne({ email });

    if (!user) return res.status(400).json({ error: "Please create an account." });
    let correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) return res.status(400).json({ error: "Incorrect password." });

    res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        location: user.location,
        token: generateToken(user._id)
    });
});

// REGISTER NEW USER

router.post('/', async (req, res) => {
    let { name, email, password, location } = req.body;
    if (!name || !email || !password || !location) return res.status(400).json({ error: "Please submit all fields." });

    let userExists = await collection.findOne({ email: email });
    if (userExists) return res.status(400).json({ error: "User already exists." });

    const salt = await bcrypt.genSalt(14);
    const hashedPassword = await bcrypt.hash(password, salt);

    let newUser = await collection.insertOne({
        name: name,
        email: email,
        password: hashedPassword,
        location: location,
    });
    let user = await collection.findOne({ _id: newUser.insertedId });
    res.status(200).json({
        _id: user._id,
        name,
        email,
        location,
        token: generateToken(user._id)
    });
});

router.put('/:uid', async (req, res) => {
    let { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: "Invalid Request" });

    let user = await collection.updateOne({ _id: ObjectId(req.params.uid) }, {
        $set: {
            name: name,
            email: email
        }
    });
    if (!user) return res.status(400).json({ error: "Invalid Request" });
    res.status(200).json(user);
});

router.delete('/:uid', async (req, res) => {
    let user = await collection.deleteOne({ _id: ObjectId(req.params.uid) })
    if (!user) return res.status(400).json({ error: "Invalid Request" });
    res.status(200).json({ message: `Delete user ${req.params._id}` })
});

module.exports = router;