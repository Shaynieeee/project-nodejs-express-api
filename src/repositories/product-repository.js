'use strict'
const mysql = require('mysql2');
var utils = require('../lib/utils');

exports.get = async(cb) => {
    var query = 'SELECT * FROM products';
    var connection = utils.getDBConnection();
    utils.exec(query, [], cb);
}
