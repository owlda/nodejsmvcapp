const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');
const router = express.Router();
const productController = require('../controller/products');

// GET Products page
router.get('/', productController.getProductsPage);

module.exports = router;
