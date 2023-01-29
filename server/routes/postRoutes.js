const express = require('express');
const router = express.Router();

const { mongo } = require('../index');
const { ObjectId } = require('mongodb');
const postsCollection = mongo.db("GatherDB").collection("Posts");

router.get('/', async (req, res) => {
    res.status(200).json({ message: "Get posts" });
});

router.post('/', async (req, res) => {
    let { name, location } = req.body;
    if (!name || !location) return res.status(400).json({ message: "Invalid Request" }); 
    let post = await postsCollection.insertOne({
        name: name,
        location: location
    });
    res.status(200).json({ _id: post.insertedId });
});

router.put('/:pid', async (req, res) => {
    let { name, location } = req.body;
    if (!name || !location) return res.status(400).json({ error: "Invalid Request" });

    let post = await postsCollection.updateOne({ _id: ObjectId(req.params.pid) }, {
        $set: {
            name: name,
            location: location
        }
    });

    if (!post) return res.status(400).json({ message: "Invalid Request" });
    res.status(200).json(post);
});

router.delete('/:pid', async (req, res) => {
    let post = await postsCollection.deleteOne({ _id: ObjectId(req.params.pid) })
    if (!post) return res.status(400).json({ error: "Invalid Request" });

    res.status(200).json({ message: `Delete post ${req.params._id}` })
});

module.exports = router;