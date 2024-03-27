import Protected from './protected';
import Auth from './auth';
import ItemDb from './ItemDb';
import Post from './post';

const router = require('express').Router();

router.use('/auth', Auth);
router.use('/protected', Protected);
router.use('/itemDB', ItemDb);
router.use('/post', Post);

export default router;