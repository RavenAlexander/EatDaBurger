var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'wm63be5w8m7gs25a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user:'x9adjurkf1n2qbfq',
        port: 3306,
        password:'ujldztyltbcjac7l',
        //database:'burgers_db'
        database: "gymvr82ryha0jle2"
});
};

connection.connect(function(err){
    if(err) throw(err);
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;