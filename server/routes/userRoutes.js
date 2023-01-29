const express = require('express');
const router = express.Router();

const { mongo } = require('../index');
const usersCollection = mongo.db("GatherDB").collection("Users");

router.get('/', async (req, res) => {
    res.status(200).json({ message: "Get users" });
});

router.post('/', async (req, res) => {
    let { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: "Invalid Request" });
    let user = await usersCollection.insertOne({
        name: name,
        email: email
    });
    res.status(200).json({ _id: user.insertedId });
});

router.put('/:uid', async (req, res) => {
    let user = await usersCollection.findOne(req.params.uid)
    if (!user) return res.status(400).json({ error: "Invalid Request" });
    res.status(200).json(user);
});

router.delete('/:uid', async (req, res) => {
    let user = await usersCollection.findOne(req.params.uid)
    if (!user) return res.status(400).json({ error: "Invalid Request" });
    res.status(200).json({ message: "Delete user ${req.params._id" })
});

module.exports = router;