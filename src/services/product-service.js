'use strict'

const repository = require('../repositories/product-repository');

exports.getProducts = () => {
    repository.get()
}