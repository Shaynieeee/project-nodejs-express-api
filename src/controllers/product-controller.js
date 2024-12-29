'use strict'

const productService = require('../services/product-service');

exports.getProducts = async (req, res) => {
    try {
        // Mengambil filter dari query parameter URL
        const filters = {
            keyword: req.query.keyword, // Keyword untuk pencarian
            category: req.query.category, // Kategori produk
            date: req.query.date, // Tanggal yang dimaksud
            hour: req.query.hour, // Jam yang dimaksud (jika ada)
            page: parseInt(req.query.page) || 1, // Halaman, default ke 1 jika tidak ada
            size: parseInt(req.query.size) || 10 // Jumlah data per halaman, default ke 10 jika tidak ada
        };

        // Memanggil service untuk mendapatkan data
        const data = await productService.getProducts(filters);

        // Mengirimkan response sukses
        res.status(200).json({
            success: true,
            data, // Data produk
            pagination: {
                current_page: filters.page, // Halaman saat ini
                total_items: data.length, // Total item di halaman ini
                page_size: filters.size, // Jumlah data per halaman
                total_pages: Math.ceil(data.length / filters.size) // Total halaman (logika dapat diperbaiki jika ada total count dari repository)
            }
        });
    } catch (e) {
        console.error(e); // Logging untuk debugging
        res.status(500).json({ message: 'Terjadi kesalahan dalam sistem' }); // Mengirimkan response error
    }
};

exports.createProducts = async (req, res) => {
    try {
      let data = await productService.createProducts(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Terjadi kesalahan dalam sistem' });
    }
}; 

exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id; // Ambil id dari parameter route
        let result = await productService.deleteProduct(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan dalam sistem' });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        let result = await productService.updateProduct(id, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update product' });
    }
};