'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth-controller');

// Register Customer
router.post('/', controller.registerCustomer);

module.exports = router;
