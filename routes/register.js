
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var q               = require('q');

//var connection = mysql.createConnection('mysql://alp:hades2525@host/diablo');

var connection = mysql.createConnection({
  host: "localhost",
  user: "alp",
  password: "hades2525",
  database: "yeni",
  port: 3306
});


/* post users listing.  connection.connect(); */
var today = new Date();

router.post('/', function(req, res,next) {
  var users={
    "username":req.body.username,
    "first_name":req.body.first_name,
    "last_name":req.body.last_name,
    "email":req.body.email,
    "password":req.body.password,
    "mobile":req.body.mobile,
    "created":today,
    "modified":today
  }

connection.query('INSERT INTO users SET ?',users, function (err, results, fields) {
  
if (err) { 
console.log(err);
} else {
  res.send({'success':true,'message' : 'Registration is complated.'});
}
});


});


module.exports = router;
