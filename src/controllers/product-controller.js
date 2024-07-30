'use strict'

const productService = require('../services/product-service');

exports.getProducts = async(req, res, next) => {
    try {
        let data = await productService.get();
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({message: 'Terjadi kesalahan dalam sistem'});
    }
}
