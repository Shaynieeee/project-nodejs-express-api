'use strict';

const authService = require('../services/auth-service');

// Register Customer
exports.registerCustomer = async (req, res) => {
    try {
        const userData = req.body;
        const result = await authService.registerCustomer(userData);
        res.status(201).json({ message: 'Customer berhasil didaftarkan', userId: result.id });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Login
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const result = await authService.login(username, password);
        // Misalkan kita menggunakan token, kita dapat mengembalikannya di sini
        res.status(200).json({ message: 'Login berhasil', user: result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
