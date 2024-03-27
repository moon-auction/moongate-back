import { Router } from 'express';
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { Post } from '../../models/Post';

const router = Router();

router.get('/topten', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const topten = await Post.find({deleted: false}).sort({likes: -1}).limit(10);
        return res.json(topten);
    } catch(e) {
        next(e);
    }
});

router.post('/', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const session = req.session;

        if (!session || !session.email) return res.status(401).json({message: 'Unauthorized'});

        const { title, content } = req.body;

        const post = new Post({title, content, uploadedBy: session.id, createdAt: new Date(), updatedAt: new Date()});
        await post.save();

        return res.json(post);
        
    } catch(e) {
        next(e);
    }
});

router.put('/:id', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const session = req.session;

        if (!session || !session.email) return res.status(401).json({message: 'Unauthorized'});

        const { title, content } = req.body;
        const post = await Post.findOneAndUpdate({_id: req.params.id, deleted: false, uploadedBy: session.id}, {title, content, updatedAt: new Date()}, {new: true});

        if (!post) return res.status(404).json({message: 'Post not found'});

        return res.json(post);
    } catch(e) {
        next(e);
    }
});

router.delete('/:id', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const session = req.session;

        if (!session || !session.email) return res.status(401).json({message: 'Unauthorized'});

        const post = await Post.findOneAndUpdate({_id: req.params.id, deleted: false, uploadedBy: session.id}, {deleted: true, updatedAt: new Date()}, {new: true});

        if (!post) return res.status(404).json({message: 'Post not found'});
        return res.json(post);
    } catch(e) {
        next(e);
    }
});

export default router;