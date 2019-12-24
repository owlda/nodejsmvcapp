const path = require('path');

const express = require('express');

const adminData = require('./admin');

const router = express.Router();

const clientController = require('../controller/client');

// GET Products page
router.get('/clients', clientController.getClientsPage);

module.exports = router;