import { Request, Response } from 'express';

class SearchController {
    index(req: Request, res: Response): void {
        // index để render giao diện trang chủ
        console.log('This is create earch page');
        res.render('create');
    }

    
}

export default new SearchController();
