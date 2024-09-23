'use strict';
const mysql = require('mysql2');
const utils = require('../lib/utils'); 

exports.create = async (userData) => {
    const { username, password, name, gender, address, role_id, created_by } = userData;
    const connection = utils.getDBConnection(); 

    return new Promise((resolve, reject) => {
        connection.query(
            'INSERT INTO User (username, password, name, gender, address, role_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
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

exports.getAll = () => {
    const connection = utils.getDBConnection();

    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM User', (err, results) => {
            if (err) {
                console.error('Error in get user list:', err);
                reject(err);
            } else {
                resolve(results);
            }
            connection.end();
        });
    });
};