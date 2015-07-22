var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysqlpwd',
    database: 'test'
});
connection.connect();



module.exports = function(req, res, next) {

    connection.query('SELECT * FROM test.acl', function(err, rows, fields) {
        if (err) throw err;

        console.log('The solution is: ', rows);
        res.json(rows);
    });

};
