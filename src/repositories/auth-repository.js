'use strict';
const mysql = require('mysql2');
const utils = require('../lib/utils');

// Register Customer
exports.registerCustomer = async (userData) => {
    const query = 'INSERT INTO user (username, password, role_id) VALUES (?, ?, ?)';
    const connection = utils.getDBConnection();

    return new Promise((resolve, reject) => {
        connection.query(query, [userData.username, userData.password, 2], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
            connection.end();
        });
    });
};

// Get User by Username (for login)
exports.getByUsername = async (username) => {
    const query = 'SELECT * FROM user WHERE username = ?';
    const connection = utils.getDBConnection();

    return new Promise((resolve, reject) => {
        connection.query(query, [username], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0]); // Mengembalikan user pertama (karena username harus unik)
            }
            connection.end();
        });
    });
};
