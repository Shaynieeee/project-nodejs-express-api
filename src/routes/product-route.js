'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.post('/', controller.createProducts);
router.get('/', controller.getProducts);
router.delete('/:id', controller.deleteProduct);

module.exports = router;