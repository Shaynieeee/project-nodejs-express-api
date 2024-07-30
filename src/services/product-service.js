'use strict'

const repository = require('../repositories/product-repository');

exports.getProducts = async () => {
    return await repository.get();
}