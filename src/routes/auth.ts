import express from 'express';
import auth from '../app/controllers/AuthController'
const router = express.Router();

router.get('/login',auth.showLoginPage);
router.post('/login',auth.login);
router.get('/register',auth.showRegisterPage);
router.post('/register',auth.register);

export default router;