import { Router } from 'express';
import Register from './register';
import Login from './login';

const router = Router();

router.use('/register', Register);
router.use('/login', Login);

export default router;