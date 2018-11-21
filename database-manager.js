const mysql = require('mysql2');
const dateformat = require('dateformat');
const database = require('./database.js');
const schemaName = 'mydb';
const tables =
{
    'Images3': {
        'imageId': 'VARCHAR(1020)',
        'uploadDate': 'DATETIME',
        'PRIMARY KEY': 'imageId'
    }
};

var listImages = 'SELECT * FROM Images2';
var images = 'Images2';
var listTables = 'SHOW TABLES';
var createTable = 'CREATE TABLE Images8 (imageId VARCHAR(1020), uploadDate DATETIME, PRIMARY KEY(imageId))'

async function logThis() {
    try {
    var result = await database.sqlQuery(createTable);
    }
    catch(err) {
console.log(err)
    }
    console.log(result);
}

//logThis();

const getRecords = async function getRecords(tableName) {
    try {
    var queryString = 'SELECT * FROM ' + tableName;
    var result = await database.sqlQuery(queryString);
    return result;
    }
    catch(err) {
        console.log(err);
    }
}

const dbmexports = {
    getRecords: getRecords
}

module.exports = dbmexports

async function log() {
    result = await getRecords(images);
    console.log(result);
}


// function createSchema(name) {
//     database.pool.query("CREATE DATABASE " + name, function (err, result) {
//         if (err) throw err;
//         console.log("Schema " + schemaName + " created.");
//     });
// };

// function createTableString(tableData) {
//     var returnString = "CREATE TABLE ";
//     tableObject = JSON.parse(tableData);
//     name = tableData.keys[0];
//     returnString += name;
//     returnString += " (";
//     for (var key in tableData.key(name)) {
//         returnString += key + " ";
//         returnString += tableData.key + " ";
//     }
//     returnString += ");"
//     console.log("Create table string: " + returnString);
// };

//MAIN BODY_____

//Ensure main schema exists, create if required
// var databases = [];

//     database.pool.query("SHOW DATABASES", function (err, result, fields) {
//         if (err) throw err;
//         for (i = 0; i < result.length; i++) {
//             const row = result[i];
//             databases.push(row.Database);
//         }
//         console.log("Databases: " + databases);
//         if (databases.includes(schemaName)) {
//             console.log(schemaName + " exists.");
//         }
//         else {
//             console.log(schemaName + " does not exist.");
//             createSchema(schemaName);
//         }
//     });

    // getImagesData()
    //     .then(function (value) {
    //         console.log("Returned internal function result: " + value);
    //     });


//Ensure all tables exist.  Create if required
// var existingTables = [];
// database.pool.query("SHOW TABLES", function (err, result, fields) {
//     if (err) throw err;
//     for (i = 0; i < result.length; i++) {
//         const tableObject = result[i];
//         existingTables.push(tableObject.Tables_in_mydb);
//     }
//     console.log("Tables: " + tables);

// });



// createTableString(tables);

//TABLE CREATION FUNCTIONS

// database.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE Images2 (imageId VARCHAR(1020), uploadDate DATETIME, PRIMARY KEY(imageId))";
//   database.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// database.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE DerivativeImages (derivativeImageId int NOT NULL AUTO_INCREMENT, isActive TINYINT, imageId VARCHAR(1020), PRIMARY KEY(derivativeImageId), FOREIGN KEY (imageId) REFERENCES Images2(imageId))";
//   database.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// database.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE CropData (cropDataId INT NOT NULL AUTO_INCREMENT, derivativeImageId INT, x1 INT, x2 INT, y1 INT, y2 INT, zoom FLOAT, PRIMARY KEY(cropDataId), FOREIGN KEY (derivativeImageId) REFERENCES DerivativeImages(derivativeImageId))";
//   database.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// database.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE HomeSlides (homeSlideId INT NOT NULL AUTO_INCREMENT, derivativeImageId INT, PRIMARY KEY(homeSlideId), FOREIGN KEY (derivativeImageId) REFERENCES DerivativeImages(derivativeImageId))";
//   database.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

//INSERT FUNCTIONS

// database.connect(function (err) {
//   var date = dateformat(Date(), "yyyy-mm-dd HH:MM:ss");
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO DerivativeImages (imageId) VALUES ('4_ze8e0f5abe02722d66d710411_f11277c8ea79e5ac5_d20181119_m213611_c002_v0001111_t0030')";
//   console.log("Query String: " + sql);
//   database.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("record inserted");
//     console.log(JSON.stringify(result));
//   });
// });

// database.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO CropData (derivativeImageId, x1, x2, y1, y2, zoom) VALUES ('1', '0', '0', '50', '50', '1.0')";
//   console.log("Query String: " + sql);
//   database.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("record inserted");
//     console.log(JSON.stringify(result));
//   });
// });

// database.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO HomeSlides (derivativeImageId) VALUES ('1')";
//   console.log("Query String: " + sql);
//   database.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("record inserted");
//     console.log(JSON.stringify(result));
//   });
// });

//SELECT FUNCTIONS

