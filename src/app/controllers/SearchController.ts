import { Request, Response } from 'express';

class SearchController {
    index(req: Request, res: Response): void {
        // index để render giao diện trang chủ
        console.log('This is search page');
        res.render('search');
    }

    searchData(req: Request, res: Response): void {
        // index để render giao diện trang chủ
        console.log('This is search data');
        res.render('data');
    }
}

export default new SearchController();
