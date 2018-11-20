//const util = require('util')
//const mysql = require('mysql2/promise');
//import mysql from 'mysql2/promise';
//const mysqlprom = require('mysql2-promise')
const mysql = require('mysql2');

const databaseName = "mydb";

const noPromisePool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.AWS_SQL_HOSTNAME,
    user: process.env.AWS_SQL_USER,
    password: process.env.AWS_SQL_PASSWORD,
    database: databaseName
});

// Ping database to check for common exception errors.
noPromisePool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
        if (err.code === "ETIMEDOUT") {
            console.error('Database timed out.')
        }
    }
    if (connection) connection.release()
    return
})

const pool = noPromisePool.promise();

var query = async function sqlQuery(queryString) {
    try {
        return await pool.query(queryString);
        //return results;
    }
    catch (err) {
        console.log(err)
    }
};

var dbexports = {
    sqlQuery: query
}

module.exports = dbexports;



// const result = await promisePool.query('SELECT * FROM Images2')
// .then(console.log(result));

// Promisify for Node.js async/await.
//pool.query = util.promisify(pool.query)

// module.exports = pool

// (async function(){
//     try {
//     var result = await pool.query('SELECT * FROM Images2');
//     }
//     catch(err) {
//         throw new Error(err);
//     }
//     console.log(result);
// })();

// try {
//     var result = await pool.query('SELECT * FROM Images2')
// } catch(err) {
//     throw new Error(err)
// }

// console.log(result)