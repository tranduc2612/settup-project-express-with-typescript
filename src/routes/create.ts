import express from 'express';
import createController from '../app/controllers/CreateController';
const router = express.Router();

// Code hơi đần =))))) do lười tạo thêm file :))
// nhưng mà nếu muốn qua được những thằng này thì phải có /create
router.get('/', createController.index);
router.get('/update', createController.renderListCourse); // => ví dụ như thằng này localhost:3000/create/update =))))))))))))
router.put('/update/:id', createController.updateProcess);
router.get('/:id/edit', createController.updateForm);
router.post('/store', createController.createCourse); 
router.get('/:id/deleteNoitice', createController.noiticeDelete); 
router.delete('/delete/:id', createController.destroy); 
export default router;