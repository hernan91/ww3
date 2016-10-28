import Mysql = require('mysql');
import { User } from "../classes/user"

export class Db{
	public static Connection = Db.Connection = Mysql.createConnection({
		host     : 'localhost',
		user     : 'hernan',//user     : 'hernan_91',
		password : '123456',//password : '4451470',
		database : 'c9'//database : 'c9'
	});
	constructor(){
		
	}
	//Devuelve todos los datos de un usuario que coincida con el parametro de entrada.
	public getUserData(id, callback){
		var query = "SELECT id, username, password, name, lastname, email, event_time FROM users WHERE id= ?";
		var params = [id];
		Db.Connection.query(query, params, (err, rows, fields)=>{
			if(err) throw err;
			callback(err, rows[0]);
		});
	};

	//Inserta un usuario en la base de datos
	public insertUser(user: User, callback){
		var query = "INSERT INTO users (username, password, name, lastname, email, event_time)"+
		"VALUES ('?', '?', '?', '?', '?', '?');";
		var params = [user.username, user.password, user.name, user.lastname, user.email, user.event_time];
		Db.Connection.query(query, params, (err)=>{
			if(err) throw err; 
			callback(err);
		});
	};
	//Devuelve true si el nombre de usuario ya esta en uso
	public usernameExists(username, callback){
		var query = "SELECT username FROM users WHERE username = ?";
		var params = [username];
		Db.Connection.query(query, params, (err, rows, fields)=>{
			if(err) return callback(err);
			callback(err, !!rows.length);
		});
	};

	//Devuelve true si el email ya esta en uso
	public emailExists(email, callback){
		var query = "SELECT email FROM users WHERE email = ?";
		var params = [email];
		Db.Connection.query(query, params, (err, rows, fields)=>{
			if(err) return callback(err);
			callback(err, !!rows.length);
		});
	};

	//Devuelve todos los datos del usuario que coinciden con los parametros de entrada.
	public verifyUser(username, password, callback){
		var query = "SELECT username, password, name, lastname, email, event_time, salt FROM users "+
		"WHERE username = ?;";
		var params = [username];
		Db.Connection.query(query, params, (err, rows, fields)=>{
			if(err) return callback(err, false);
			var user = rows[0];
			if(user) delete user.password;
			callback(null, user, fields);
			// var hashedPassword = pass.getHashedPass(password, user.salt);
			// if(hashedPassword === user.password){
				
			// 	delete user.salt;
			// 	return callback(err, user, fields);
			// }
		});
	};
}

//devuelve todas las categorias que tiene el usuario de entrada.









