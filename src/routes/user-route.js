const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');

// Create Employee
router.post('/', controller.createEmployee);

// Get User List
router.get('/', controller.getUserList);

// Get User Detail by ID
router.get('/:id', controller.getUserById);

// Update Employee
router.patch('/:id', controller.updateEmployee);

// Update Customer
router.patch('/customers/:id', controller.updateCustomer);

// Delete User
router.delete('/:id', controller.deleteUser);

module.exports = router;
