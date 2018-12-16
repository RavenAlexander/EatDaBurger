var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'o677vxfi8ok6exrd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 8889,
    user:'qsfz4ofjf4c4t64b',
    password:'yu029vf44so379ov',
    database:'mylxfpczc5lgv74g'
});

connection.connect(function(err){
    if(err) throw(err);
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;