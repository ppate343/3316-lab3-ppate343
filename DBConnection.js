const mysql = require ('mysql');

function newConnection()
{


let conn = mysql.createConnection({
    host: '34.136.98.79', 
    user: 'root', 
    password: '123', 
    database:'DoodleAppDB'

});
return conn;
}

// creating a function that creates a new object and returns 



module.exports = newConnection; 