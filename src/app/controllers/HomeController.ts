import { Request, Response, NextFunction } from 'express';
import {Course} from '../models/Course'

class HomeController {
    // đây là các controller sử lí để render trang cũng như sử lí db giống của module 3 thôi !

    index(req: Request, res: Response,next:NextFunction): void {
        // gọi db thì phải có try catch
        try {
            Course.find({})
            .then((course:any)=>{
                // thằng này sẽ render file index.ejs ở trong view
                // đối số thứ 2 của nó truyền vào chính là dữ liệu từ database  
                res.render("index",{res:course})
            })
            .catch(next)
        } catch (error) {
            console.log('loi')
        }
    }

    showDetails(req: Request, res: Response,next:NextFunction){
        try {
            Course.findOne({slug: req.params.id})
        .then((course:any)=>{
            res.json(course);
        })
        .catch(next)
        } catch (error) {
            console.log("loi");
        }
    }
}

export default new HomeController();
