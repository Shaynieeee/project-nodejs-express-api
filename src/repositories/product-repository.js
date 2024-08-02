'use strict';
const mysql = require('mysql2');
var utils = require('../lib/utils');

exports.get = async () => {
    var query = 'SELECT * FROM products';
    var connection = utils.getDBConnection();

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

exports.post = async (productData) => {
    const { name, price, exp } = productData;
    const connection = utils.getDBConnection();

    try {
        const [results] = await connection.execute(
            'INSERT INTO products (name, price, exp) VALUES (?, ?, ?)', 
            [name, price, exp]
        );

        console.log('Execute result:', results); // Log hasil untuk debugging  

        // Pastikan `results` berisi `insertId`
        if (results && results.insertId !== undefined) {
            return { id: results.insertId };
        } else {
            throw new Error('Insert result does not contain insertId');
        }
    } catch (error) {
        console.error('Error in post:', error); // Log error untuk debugging
        throw error;
    } finally {
        connection.end(); // Pastikan koneksi ditutup
    }
};

exports.delete = async (id) => {
    const connection = utils.getDBConnection();

    try {
        const [results] = await connection.execute(
            'DELETE FROM products WHERE id = ?', 
            [id]
        );

        if (results.affectedRows > 0) {
            return { message: 'Product deleted successfully' };
        } else {
            throw new Error('Product not found');
        }
    } catch (error) {
        console.error('Error in delete:', error);
        throw error;
    } finally {
        connection.end();
    }
};