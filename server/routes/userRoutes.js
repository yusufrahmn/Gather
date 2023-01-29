const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: "Get users" });
});


router.post('/', (req, res) => {
    res.json({ message: "Create new user" });
});


router.put('/', (req, res) => {
    res.status(200).json({ message: "Update users" });
});

router.delete('/', (req, res) => {
    res.status(200).json({ message: "Delete user" });
});

module.exports = router;