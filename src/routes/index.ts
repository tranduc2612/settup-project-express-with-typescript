import { Request, Response } from 'express';
import homeRouter from './home';
import searchRouter from './search';
import createRouter from './create'
import authRouter from './auth'


// đây là router mẹ nó sẽ chạy qua thằng này trước và những thằng sau sẽ chạy theo cú pháp /tên router mẹ/router con
export default function route(app: any) {
    app.use('/home', homeRouter);
    app.use('/search', searchRouter);
    app.use('/create',createRouter);
    app.use('/auth',authRouter)
}