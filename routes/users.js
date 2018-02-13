'use strict';
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var q               = require('q');

//var connection = mysql.createConnection('mysql://alp:hades2525@host/diablo');

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "bdcddf9b318b17",
  password: "c89f70ec",
  database: "heroku_f7abf02a6dfd105",
  port: 3306
});


/* post users listing.  connection.connect(); */

router.post('/', function(req, res,next) {
var username = req.body.username;
var password = req.body.password;

console.log("username="+username )
console.log("password="+password )


connection.query('SELECT * FROM users WHERE username = ? AND password = ?',[username,password],function(err,rows,fields) {
  
if (err) { 
console.log(err);
}
if ( rows.length > 0) {
  res.send({'success':true,'message':rows[0] ,'asd':rows[0].password });
} else {
  res.send({'success':false,'message' : 'User not found , please try again'});
}
});


});


module.exports = router;
