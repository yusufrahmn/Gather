const express = require('express');
const router = express.Router();

router.post('/api/users', (req, res) => {
    res.json({ "futureFunction": "Create new user" });
});

router.get('/api/users', (req, res) => {
    res.status(200).json({ "futureFunction": "Get users" });
});

router.put('/api/users', (req, res) => {
    res.status(200).json({ "futureFunction": "Update users" });
});

router.delete('/api/users', (req, res) => {
    res.status(200).json({ "futureFunction": "Delete user" });
});

module.exports = router;