'use strict'

const userService = require('../services/user-service');

exports.createUser = async (req, res) => {
    try {
        const userData = req.body;
        const result = await userService.createUser(userData);
        res.status(201).json({ message: 'User berhasil dibuat', userId: result.id });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getUserList = async (req, res) => {
    try {
        const users = await userService.getUserList(); 
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Gagal mendapatkan daftar pengguna: ' + err.message }); 
    }
};
