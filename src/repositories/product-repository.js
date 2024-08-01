'use strict'
const mysql = require('mysql')

const db = mysql.createConnection ({
    host:"localhost", 
    user:"root",
    password:"my-secret-pw", 
    database:"catalog_db"
})

exports.get = async() => {
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err.stack);
            return;
        }
        db.log('Connected to the database as id ' + connection.threadId);

        // Example query
        const query = 'SELECT * FROM products';

        db.query(query, (err, results, fields) => {
            if (err) {
                console.error('Error executing query:', err.stack);
                return;
            }
            console.log('Query results:', results);

            // Close the connection
            db.end((err) => {
            if (err) {
                console.error('Error closing the connection:', err.stack);
                return;
            }
            console.log('Connection closed.');
            });
        });
    });
    return "";
      
    // return await db.query("SELECT * FROM products", (error,result) => {
    //     // hasil data dari mysql
    //     console.log(result.data)
    //     return result.data;
    // });
}
