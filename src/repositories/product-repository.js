'use strict';
const mysql = require('mysql2');
var utils = require('../lib/utils');

exports.get = async (filters) => {
    const { keyword, category, date, hour, page, size } = filters;

    // Menghitung offset untuk pagination
    const offset = (page - 1) * size;
    const params = [];
    let query = `SELECT * FROM products WHERE 1 = 1`; // Base query untuk mencari semua produk

    // Filter berdasarkan keyword (pada field address atau name)
    if (keyword) {
        query += ` AND (address LIKE ? OR name LIKE ?)`;
        params.push(`%${keyword}%`, `%${keyword}%`); // Menggunakan wildcard % untuk pencarian "contains"
    }

    // Filter berdasarkan category (field type)
    if (category) {
        query += ` AND type = ?`;
        params.push(category); // Menambahkan nilai kategori ke parameter query
    }

    // Filter berdasarkan date (produk harus tersedia di hari itu)
    if (date) {
        query += ` AND DATE(open_hour) <= ? AND DATE(close_hour) >= ?`;
        params.push(date, date); // Menambahkan tanggal sebagai parameter query
    }

    // Filter berdasarkan jam (produk harus tersedia di jam itu, hanya berlaku jika `date` diisi)
    if (hour && date) {
        query += ` AND TIME(open_hour) <= ? AND TIME(close_hour) >= ?`;
        params.push(hour, hour); // Menambahkan jam sebagai parameter query
    }

    // Menambahkan pagination (LIMIT dan OFFSET)
    query += ` LIMIT ? OFFSET ?`;
    params.push(parseInt(size), parseInt(offset)); // Menambahkan batas data per halaman dan posisi awal data

    const connection = utils.getDBConnection(); // Membuat koneksi ke database

    // Menggunakan Promise untuk menangani query asynchronous
    return new Promise((resolve, reject) => {
        connection.query(query, params, (err, results) => {
            if (err) {
                reject(err); // Menangkap error jika query gagal
            } else {
                resolve(results); // Mengembalikan hasil query jika sukses
            }
            connection.end(); // Menutup koneksi setelah query selesai
        });
    });
};

exports.post = async (productData) => {
    const { name, price, exp } = productData;
    const connection = utils.getDBConnection();

    return new Promise((resolve, reject) => {
        connection.query(
            'INSERT INTO products (name, price, exp) VALUES (?, ?, ?)', 
            [name, price, exp],
            (err, results) => {
                if (err) {
                    console.error('Error in post:', err); // Log error untuk debugging
                    reject(err);
                } else {
                    resolve({ id: results.insertId });
                }
                connection.end(); 
            });
    });
};

exports.delete = async (id) => {
    const connection = utils.getDBConnection();

    return new Promise((resolve, reject) => {
        connection.query(
            'DELETE FROM products WHERE id = ?', 
            [id],
            (err, results) => {
                if (err) {
                    console.error('Error in post:', err); // Log error untuk debugging
                    reject(err);
                } else {
                    resolve({ message: 'Product deleted successfully' });
                }
                connection.end(); 
            });
    });
};

exports.update = async (id, productData) => {
    const { name, price, exp } = productData;
    const connection = utils.getDBConnection();

    return new Promise((resolve, reject) => {
        connection.query(
            'UPDATE products SET name = ?, price = ?, exp = ? WHERE id = ?', 
            [name, price, exp, id],
            (err, results) => {
                connection.end();
                if (err) {
                    return reject(err);
                }
                if (results.affectedRows > 0) {
                    resolve({ message: 'Product updated successfully' });
                } else {
                    reject(new Error('Product not found'));
                }
            }
        );
    });
};