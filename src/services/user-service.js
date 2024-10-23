'use strict';

const userRepository = require('../repositories/user-repository');

exports.createEmployee = async (userData) => {
    try {
        // Cek apakah username sudah terdaftar
        const existingUser = await userRepository.findByUsername(userData.username);
        if (existingUser) {
            throw new Error('Username telah terdaftar');
        }

        // Membuat employee baru
        const result = await userRepository.createEmployee(userData);
        return result;
    } catch (err) {
        throw new Error('Gagal membuat employee: ' + err.message);
    }
};

exports.getUserList = async () => {
    try {
        const users = await userRepository.getAll();
        return users;
    } catch (err) {
        throw new Error('Gagal mendapatkan daftar user: ' + err.message);
    }
};

exports.getUserById = async (id) => {
    try {
        const user = await userRepository.findById(id);
        if (!user) {
            throw new Error('User tidak ditemukan');
        }
        return user;
    } catch (err) {
        throw new Error('Gagal mendapatkan user: ' + err.message);
    }
};

// Update Employee
exports.updateEmployee = async (id, updateData) => {
    try {
        const user = await userRepository.updateUser(id, updateData);
        return user;
    } catch (err) {
        throw new Error('Gagal memperbarui employee: ' + err.message);
    }
};

// Update Customer
exports.updateCustomer = async (id, updateData) => {
    try {
        const user = await userRepository.update(id, updateData);
        return user;
    } catch (err) {
        throw new Error('Gagal memperbarui customer: ' + err.message);
    }
};

exports.deleteUser = async (id) => {
    try {
        await userRepository.delete(id);
        return { success: true };
    } catch (err) {
        throw new Error('Gagal menghapus user: ' + err.message);
    }
};
