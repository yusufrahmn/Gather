const { application } = require('express')
const express = require('express')
const router = express.Router()

app.get('/register', (req, res) => {
    res.json({ message: 'noob'})
})

module.exports = router;

