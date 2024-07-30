const mysql = require('mysql')

const db = mysql.createConnection ({
    host:"localhost", 
    user:"root",
    password:"", 
    database:"js"
})

module.exports = db