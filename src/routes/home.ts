import express from 'express';
import homeController from '../app/controllers/HomeController';
const router = express.Router();


// đây là router con để vào được đây phải qua router mẹ
router.get('/:id', homeController.showDetails); // đường dẫn để vào thằng này là /home/id=...
router.get('/', homeController.index); // đường dẫn để vào thằng này là /home/ (tức là chỉ có localhost:3000/home là vào đc)

// đối số thứ 2 của router con nhận vào là controller (Mô hình MVC)
export default router;
