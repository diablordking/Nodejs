
var mysql           = require('mysql');
var q               = require('q');
var MySQLConnection = {};


MySQLConnection.connect = function(){
    var d = q.defer();
    MySQLConnection.connection = mysql.createConnection({
        host                : 'localhost',
        user                : 'alp',
        password            : 'hades2525',
        database            : 'diablo'
    });

    MySQLConnection.connection.connect(function (err) {
        if(err) {
            console.log('Not connected '.red, err.toString().red, ' RETRYING...'.blue);
            d.reject();
        } else {
            console.log('Connected to Mysql. Exporting..'.blue);
            d.resolve(MySQLConnection.connection);
        }
    });
    return d.promise;
};


module.exports = MySQLConnection;
