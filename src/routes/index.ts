import express from 'express';
import Protected from './protected';
import Places from './places';

const router = express.Router();
router.use('/protected', Protected);
router.use('/places', Places);

export default router;