import express from 'express';
import { activeUser, login, register } from '../controllers/UserControllers';



const router = express.Router();


router
  .route('/profile')
  
router.post('/register', register);
router.post('/active', activeUser);
router.post('/login', login);

export default router;
