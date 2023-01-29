const jwt = require('jsonwebtoken');
const { mongo } = require('../index');
const { ObjectId } = require('mongodb');
const collection = mongo.db("GatherDB").collection("Users");

const authenticate = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await collection.findOne({ _id: ObjectId(decoded.id) }, { projection: { password: 0 } });
            next();
        } catch (error) {
            console.log(error)
            res.status(401).json({ error: "Invalid token." });
        }
    }

    if (!token) {
        res.status(401).json({ error: "No token." });
    }
}

module.exports = authenticate;