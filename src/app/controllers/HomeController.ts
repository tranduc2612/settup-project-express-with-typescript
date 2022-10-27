import { Request, Response } from 'express';

class HomeController {
    index(req: Request, res: Response): void {
        console.log('This is home page');
        res.render('index');
    }
}

export default new HomeController();
