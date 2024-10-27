'use strict';

const userRepository = require('../repositories/user-repository');
const authRepository = require('../repositories/auth-repository');

exports.registerCustomer = async (userData) => {
    try {
        // Cek apakah username sudah terdaftar
        const existingUser = await userRepository.findByUsername(userData.username);
        if (existingUser) {
            throw new Error('Username telah terdaftar');
        }

        const customerData = {
            ...userData,
            role_id: 2 // role_id untuk customer
        };

        // Membuat customer baru
        const result = await authRepository.registerCustomer(customerData);
        return result;
    } catch (err) {
        throw new Error('Gagal mendaftarkan customer: ' + err.message);
    }
};

exports.login = async (username, password) => {
    try {
        const user = await userRepository.findByUsername(username);
        if (!user || user.password !== password) {
            throw new Error('Username atau password salah');
        }

        // Logika autentikasi, seperti token generation
        return user; // atau token
    } catch (err) {
        throw new Error('Gagal login: ' + err.message);
    }
};
