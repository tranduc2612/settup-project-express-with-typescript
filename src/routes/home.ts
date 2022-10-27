import express,{Request, Response } from 'express';
import homeController from '../app/controllers/HomeController'
const router = express.Router();

router.get('/',homeController.index);

export default router