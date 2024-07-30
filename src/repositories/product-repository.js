'use strict'
const mysql = require('mysql')

const db = mysql.createConnection ({
    host:"localhost", 
    user:"root",
    password:"", 
    database:"js"
})

exports.get = async() => {
    db.query("SELECT * FROM product", (error,result) => {
        // hasil data dari mysql
        console.log(result)
        res.send(result)
    })
}
