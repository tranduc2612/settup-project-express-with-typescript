import { Request, Response, NextFunction } from 'express';
import {Course} from '../models/Course'

class HomeController {
    index(req: Request, res: Response,next:NextFunction): void {
        // console.log('This is home page');
        // res.render('index');
        try {
            Course.find({})
            .then((course:any)=>{  
                console.log(course);
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
