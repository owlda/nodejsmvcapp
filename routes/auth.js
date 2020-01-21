const path = require('path');

const express = require('express');

const adminData = require('./admin');

const router = express.Router();

const authController = require('../controller/auth');

// GET Products page
router.get('/registration', authController.getSignUpPage);


module.exports = router;