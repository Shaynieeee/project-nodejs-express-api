'use strict'
const mysql = require('mysql')

const db = mysql.createConnection ({
    host:"localhost", 
    user:"root",
    password:"", 
    database:"js"
})

exports.get = async() => {
    return await db.query("SELECT * FROM product");
}
