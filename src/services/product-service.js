'use strict'

const repository = require('../repositories/product-repository');

exports.getProducts = async (cb) => {
    repository.get((err, result) => {
        cb(result);
    });
}