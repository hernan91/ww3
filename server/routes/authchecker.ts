//ver https://github.com/expressjs/session y https://github.com/vladotesanovic/angular2-express-starter/tree/master/server/routes
import { Router, Request, Response } from "express";
import SqlStore = require("express-mysql-session");
import Session = require("express-session");
import { Db } from "../srv/db"
import { User } from "../classes/user"

export class AuthChecker{
	public router: Router;
	private sessionStore;
	private sessionOptions: Session.SessionOptions = {
		secret: 'secreto',
		store: this.sessionStore,
		resave: true,
		saveUninitialized: true
	}
	private dataBase: Db;
	
	constructor(app){
		SqlStore(Session);
		this.router = Router();
		this.sessionStore = new SqlStore({database:"c9"}, Db.Connection);
		app.use( Session(this.sessionOptions) );
		this.dataBase = new Db();

		/*this.router.get("/signin", (req: Request, res: Response, next)=>{
			//req.session.user = new User(
				req.body.username, req.body.password
			);
			//res.sendStatus(200);
			req.session.user = new User("Carlos", "Castellani")
			res.send("Successful")
			next();
		});
		this.router.get("/logout", (req: Request, res:Response, next)=>{
			req.session.destroy( (err)=>{
				if(err) next(err);
				res.send("chau");
				next("Logout");
		});*/
		this.router.use((req: Request, res: Response, next)=>{
			if(!req.session.user){
				req.session.user = new User("pedro57", "password")
				next();
			}
			else{
				this.dataBase.verifyUser(req.session.user.username, req.session.user.password, (err, user, fields)=>{
					if(err){
						next(err);
					}
					next();
				})
			}
		})
	}
}