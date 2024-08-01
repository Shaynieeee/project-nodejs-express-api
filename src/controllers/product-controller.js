'use strict'

const productService = require('../services/product-service');

exports.getProducts = async(req, res, next) => {
    try {
        let data = await productService.getProducts((data) => {
            res.status(200).send(data);
        });
    } catch(e) {
        console.log(e);
        res.status(500).send({message: 'Terjadi kesalahan dalam sistem'});
    }
}
