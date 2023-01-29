const express = require('express');
const router = express.Router();

const { mongo } = require('../index');
const { ObjectId } = require('mongodb');
const collection = mongo.db("GatherDB").collection("Posts");

const authenticate = require('../middleware/authMiddleware');

// GET POSTS / LOAD FEED

router.get('/', authenticate, async (req, res) => {
    res.status(200).json({ message: "Get posts" }); 
});

// CREATE POST

router.post('/', authenticate, async (req, res) => {
    let { name, type, description  } = req.body;
    if (!name || !type || !description) return res.status(400).json({ error: "Please fill all fields." }); 
    if (type != 'event' && type != 'poll') return res.status(400).json({ error: "Gather currently only supports events and polls." }); 
    let draftPost = {
        name,
        type,
        description,
        user: req.user._id,
        location: req.user.location,
    }
    if (type == 'event') {
        let { timestamp } = req.body;
        if (!timestamp) return res.status(400).json({ error: "Events must have a valid timestamp." });
        draftPost.timestamp = timestamp;
    } else if (type == 'poll') {
        let { responses } = req.body;
        if (!responses || responses.length < 2 || !responses[0].label || !responses[1].label) return res.status(400).json({ error: "Polls must have at least two options with labels." });
        draftPost.responses = responses;
    }
    let insertedPost = await collection.insertOne(draftPost);
    let post = await collection.findOne({ _id: insertedPost.insertedId })
    res.status(200).json(post);
});


router.delete('/:pid', authenticate, async (req, res) => {
    let post = await collection.findOne({ _id: ObjectId(req.params.pid) })
    if (!post) return res.status(400).json({ error: "Post not found." });

    console.log(post.user);
    console.log(req.user._id);
    if (post.user == req.user._id) return res.status(400).json({ error: "You cannot delete others' posts." });
    if (post.user != req.user._id) return res.status(400).json({ error: "You can delete others' posts." });

    res.status(200).json({ message: `Delete post ${req.params.pid}` })
});

module.exports = router;