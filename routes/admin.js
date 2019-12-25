const path = require('path');

const express = require('express');

const adminController = require('../controller/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProductPage);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProductPage);

// admin page  /admin/home => GET DATA
router.get('/home-admin', adminController.getAdminPage);

module.exports = router;

