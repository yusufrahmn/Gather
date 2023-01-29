const express = require('express');
const router = express.Router();

console.log('HIIII1');

router.get('/api/users', (req, res) => {
    res.status(200).json({ "futureFunction": "Get users" });
});

router.post('/api/users', (req, res) => {
    console.log('HIIII2');
    res.json({ "futureFunction": "Create new user" });
});

router.put('/api/users', (req, res) => {
    res.status(200).json({ "futureFunction": "Update users" });
});

router.delete('/api/users', (req, res) => {
    res.status(200).json({ "futureFunction": "Delete user" });
});

module.exports = router;