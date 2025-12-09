const express = require('express')
const router = express.Router()
const User = require('../model/User')

router.post('/user', async (req, res) => {
try {
const data = req.body;
const newUser = new User(data);
const response = await newUser.save();
console.log("Data saved");
res.status(200).json(response);
} catch (err) {
console.log(err);
res.status(500).json({ error: "Internal server error" });
}
});

router.get('/user', async (req, res) => {
try {
const users = await User.find(); 
res.status(200).json(users);
} catch (error) {
console.log("Error fetching users:", error);
res.status(500).json({ error: "Internal Server Error" });
}
});

module.exports = router;