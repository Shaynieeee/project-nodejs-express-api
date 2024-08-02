'use strict'

const productService = require('../services/product-service');

exports.getProducts = async(req, res, next) => {
    try {
        let data = await productService.getProducts();
        res.status(200).send(data);
    } catch(e) {
        console.log(e);
        res.status(500).send({message: 'Terjadi kesalahan dalam sistem'});
    }
};

exports.postProducts = async (req, res) => {
    try {
      let data = await productService.postProducts(req.body);
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
