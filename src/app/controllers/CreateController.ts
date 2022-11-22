import { Request, Response,NextFunction } from 'express';
import {Course} from '../models/Course'

class SearchController {
    //[GET] /create
    index(req: Request, res: Response): void {
        // index để render giao diện trang chủ
        console.log('This is create earch page');
        res.render('create');
    }

    //[POST] /create/store
    createCourse(req: Request, res: Response) :void{
        const formData = req.body
        const course = new Course(formData);
        course.save()
            .then(() =>{
                res.redirect("/home");
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    
    //[GET] /create/update
    renderListCourse(req: Request, res: Response,next:NextFunction):void{
        Course.find({})
            .then((course)=>{                
                res.render("updatelist",{course});
            })
            .catch(next)
        
    }

    //[GET] /create/:id/edit
    updateForm(req: Request, res: Response,next:NextFunction):void{
        Course.findById(req.params.id)
            .then(course=>{
                res.render("update",{course})
            })
            .catch(next)
    }

    //[PUT] /create/update
    updateProcess(req: Request, res: Response,next:NextFunction):void{
        const idUpdate = req.params.id;
        const dataUpdate = req.body
         Course.updateOne({_id:idUpdate},dataUpdate)
            .then(()=>{
                  res.redirect('/create/update');              
            })
            .catch(next)   
    }

    noiticeDelete(req: Request, res: Response,next:NextFunction):void{
        Course.findById(req.params.id)
            .then(course=>{
                res.render("delete",{course});
            })
            .catch(next)
    }

    destroy(req: Request, res: Response,next:NextFunction): void {
        const idDelete = req.params.id;
        Course.deleteOne({_id:idDelete})
            .then(()=>{
                res.redirect('/create/update')
            })
            .catch(next)
    }
}

export default new SearchController();
