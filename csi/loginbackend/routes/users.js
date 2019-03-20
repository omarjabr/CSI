var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'csi_users'
});

router.post('/', function(req, res, next) {
  
var username = req.body.username;
var password = req.body.password;

connection.query(
  "SELECT * FROM admin WHERE username = ? AND password = ?",
  // "UPDATE admin SET password = ? WHERE username = ?",
  [username, password], function(err, row, field){
      if(err){
        console.log(err);
        res.send({ 'success': false, 'message': 'Could not connect to db' });
      }
      if(row.length > 0){
        res.send({ 'success': true, 'admin': row[0].username });
      }else{
        res.send({ 'success': false, 'message': "User not found" });
      }
  });

});

module.exports = router;