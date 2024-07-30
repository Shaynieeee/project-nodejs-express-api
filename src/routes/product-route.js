'use strict'

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');
const productService = require('../services/product-service');

router.get('/', productController.getProducts);

module.exports = router;