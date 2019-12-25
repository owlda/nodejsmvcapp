const path = require('path');

const express = require('express');

const adminData = require('./admin');

const router = express.Router();

const productController = require('../controller/products');

// GET Products page
router.get('/', productController.getProductsPage);

// GET Product by title
router.get('/details/:productid', productController.getProduct);

module.exports = router;
