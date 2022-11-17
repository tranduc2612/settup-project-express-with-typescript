import { Request, Response } from 'express';
import homeRouter from './home';
import searchRouter from './search';

export default function route(app: any) {
    app.use('/home', homeRouter);
    app.use('/search', searchRouter);
    app.use('/')
}