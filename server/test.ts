//ver https://github.com/expressjs/session y https://github.com/vladotesanovic/angular2-express-starter/tree/master/server/routes
import Mysql = require('mysql');
/*import Session = require("express-session");
import SqlStore = require("express-mysql-session");*/
import { Router, Request, Response } from "express";

let Connection = Mysql.createConnection({
  		host     : 'localhost',
  		user     : 'hernan',//user     : 'hernan_91',
  		password : '123456',//password : '4451470',
  		database : 'c9'//database : 'c9'
});
console.log("holis")

Connection.query("SELECT * FROM categories", (err, rows, fields)=>{
	if(err){
		console.error(err)
		throw err;
	}  
	console.log(rows[0]);
})
		