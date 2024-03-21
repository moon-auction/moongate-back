import express from 'express';
import Protected from './protected';
import Auth from './auth';
import ItemDb from './ItemDb';

const router = express.Router();

router.use('/auth', Auth);
router.use('/protected', Protected);
router.use('/itemDB', ItemDb);

export default router;