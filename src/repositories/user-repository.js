'use strict';
const mysql = require('mysql2');
const utils = require('../lib/utils'); 

exports.createEmployee = async (userData) => {
    const { username, password, name, gender, address, role_id, created_by } = userData;
    const connection = utils.getDBConnection(); 

    return new Promise((resolve, reject) => {
        connection.query(
            'INSERT INTO user (username, password, name, gender, address, role_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
            [username, password, name, gender, address, role_id, new Date(), created_by],
            (err, results) => {
                if (err) {
                    console.error('Error in create user:', err); 
                    reject(err);
                } else {
                    resolve({ id: results.insertId });
                }
                connection.end(); 
            }
        );
    });
};

// Fungsi untuk mendapatkan user berdasarkan username
exports.findByUsername = async (username) => {
    const query = 'SELECT * FROM user WHERE username = ?';
    const connection = utils.getDBConnection();

    return new Promise((resolve, reject) => {
        connection.query(query, [username], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0]); // Mengembalikan satu user jika ditemukan
            }
            connection.end();
        });
    });
};


exports.getAll = async () => {
    const query = 'SELECT * FROM user';
    const connection = utils.getDBConnection();

    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
            connection.end();
        });
    });
};

// Get User by ID
exports.findById = async (id) => {
    const query = 'SELECT * FROM user WHERE id = ?';
    const connection = utils.getDBConnection();

    return new Promise((resolve, reject) => {
        connection.query(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0]);  // Karena kita hanya ingin satu user
            }
            connection.end();
        });
    });
};

// Update Employee
exports.updateUser= async (id, userData) => {
    const query = 'UPDATE user SET username = ?, password = ?, name = ?, gender = ?, address = ?, role_id = ? WHERE id = ?';
    const connection = utils.getDBConnection();

    return new Promise((resolve, reject) => {
        connection.query(query, [userData.username, userData.password, userData.name, userData.gender, userData.address, userData.role_id, id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
            connection.end();
        });
    });
};

// Update Customer
exports.update = async (id, userData) => {
    const fields = Object.keys(userData);
    const values = Object.values(userData);
    
    if (fields.length === 0) {
        throw new Error('Tidak ada field yang diupdate');
    }

    const query = `UPDATE user SET ${fields.map(field => `${field} = ?`).join(', ')} WHERE id = ?`;
    const connection = utils.getDBConnection();

    return new Promise((resolve, reject) => {
        connection.query(query, [...values, id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
            connection.end();
        });
    });
};


// Delete User
exports.delete = async (id) => {
    const query = 'DELETE FROM user WHERE id = ?';
    const connection = utils.getDBConnection();

    return new Promise((resolve, reject) => {
        connection.query(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
            connection.end();
        });
    });
};