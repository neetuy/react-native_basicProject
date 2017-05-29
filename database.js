// import React from 'react';
// import SQLite from 'react-native-sqlite-storage';


// var database_name = "dbname.db";
// var database_version = "1.0";
// var database_displayname = "db";
// var database_size = 200000;

// let conn = SQLite.openDatabase(database_name, database_version, database_displayname, database_size, openDBHandler, errorDBHandler);

// class Database  {
//     getConnection() {
//         return conn;
//     }
// }

// module.exports = new Database();


var sqlite = require('react-native-sqlite');
sqlite.open("filename.sqlite", function (error, database) {
  if (error) {
    console.log("Failed to open database:", error);
    return;
  }
  var sql = "SELECT a, b FROM table WHERE field=? AND otherfield=?";
  var params = ["somestring", 99];
  database.executeSQL(sql, params, rowCallback, completeCallback);
  function rowCallback(rowData) {
    console.log("Got row data:", rowData);
  }
  function completeCallback(error) {
    if (error) {
      console.log("Failed to execute query:", error);
      return
    }
    console.log("Query complete!");
    database.close(function (error) {
      if (error) {
        console.log("Failed to close database:", error);
        return
      }
    });
  }
});
