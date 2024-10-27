'use strict';

const userService = require('../services/user-service');

// Create Employee
exports.createEmployee = async (req, res) => {
    try {
        const userData = req.body;
        const result = await userService.createEmployee(userData);
        res.status(201).json({ message: 'Employee berhasil dibuat', userId: result.id });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get User List
exports.getUserList = async (req, res) => {
    try {
        const users = await userService.getUserList();
        res.status(200).json({ message: 'Daftar user berhasil didapatkan', data: users });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get User by ID
exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userService.getUserById(userId);
        if (!user) {
            res.status(404).json({ message: 'User tidak ditemukan' });
            return;
        }
        res.status(200).json({ message: 'User berhasil didapatkan', data: user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update User (Employee)
exports.updateEmployee = async (req, res) => {
    try {
        const userId = req.params.id;
        const updateData = req.body;
        const result = await userService.updateEmployee(userId, updateData);
        res.status(200).json({ message: 'User berhasil diperbarui', data: result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update Customer
exports.updateCustomer = async (req, res) => {
    try {
        const userId = req.params.id;
        const updateData = req.body;
        const result = await userService.updateCustomer(userId, updateData);
        res.status(200).json({ message: 'Customer berhasil diperbarui', data: result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete User
exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await userService.deleteUser(userId);
        res.status(200).json({ message: 'User berhasil dihapus' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
