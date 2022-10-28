const mysql = require('mysql');

const options = { connectionLimit :10, 
    user:'u888185272_vitor' ,
    password: '99746510Gg@', 
    database: 'u888185272_posts', 
    host: 'sql817.main-hosting.eu' , 
    port: 3306 } 
const db = mysql.createPool(options); 

db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
global.db = db;
module.exports = db;

