'use strict'

const repository = require('../repositories/user-repository');

exports.createUser = async (userData) => {
    try {
        const result = await repository.create(userData);
        return result;
    } catch (err) {
        throw new Error('Gagal membuat user: ' + err.message);
    }
};

exports.getUserList = async () => {
    try {
        const result = await repository.getAll();
        return result;
    } catch (err) {
        throw new Error('Gagal mendapatkan daftar user: ' + err.message);
    }
};
