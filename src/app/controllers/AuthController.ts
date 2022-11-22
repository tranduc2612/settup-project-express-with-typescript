import { Request, Response,NextFunction } from 'express';
import {User} from '../models/User'
import jwt from 'jsonwebtoken'
require("dotenv").config();

class AuthController{
    showLoginPage(req: Request, res: Response,next:NextFunction){
        res.render('login');
    }

    login = async(req: Request, res: Response, next: NextFunction) => {
        const {account,password} = req.body;
        const key = process.env.SECRET_KEY || "";
        try {
            // authetication
            const userFind = await User.findOne({account: account});
            if(userFind != null){
                const payload = {id: userFind._id}
                const token = jwt.sign(payload,key)
                res.cookie("token",token,{
                    httpOnly: true
                })
                res.redirect("/home");
            }else{
                console.log(123);
                res.send("");
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }

    register(req: Request, res: Response, next: NextFunction){
        const dataInput = req.body;
        const data = {
            account:dataInput.account,
            password:dataInput.password
        }
        User.findOne({account: data.account})
            .then((user)=>{
                if(user == null){
                    const newUser = new User(data);
                    newUser.save()
                        .then(() =>{
                            res.redirect("/auth/login");
                        })
                        .catch((err)=>{
                            console.log(err);
            })
                }else{
                    console.log("Tài khoản đã tồn tại !");
                    res.send("");
                }
            })
            .catch(next)
    }

    showRegisterPage(req: Request, res: Response,next:NextFunction){
        res.render('register');
    }
}

export default new AuthController();