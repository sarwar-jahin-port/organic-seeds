const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

// Route to login
router.post("/login", userController.login);

module.exports = router;