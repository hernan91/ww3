//ver https://github.com/expressjs/session y https://github.com/vladotesanovic/angular2-express-starter/tree/master/server/routes
import { Router, Response, Request } from "express";
import { } from "express-session"

const protectedRouter: Router = Router();

protectedRouter.use(function(req: Request, res: Response, next) {
    if(req.session){
        next();
    }
    //redirect("/login")
});

export { protectedRouter }





