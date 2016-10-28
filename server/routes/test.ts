import { Router, Request, Response, Express } from "express"; //*Express

export class Test{
	public testRouter: Router;
	public db
	
	constructor(app: Express.Application){
		this.
		this.testRouter = Router();
		this.testRouter.get("/signin", (req: Request, res: Response, next)=>{
			req.session.user = "Hernan"
		});
		this.testRouter.get("/signout", (req: Request, res:Response)=>{
			req.session.destroy( (err)=>{

			});
		});
	}
}