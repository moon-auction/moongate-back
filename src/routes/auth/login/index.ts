import { Router } from 'express';
import { login } from './login.ctrl';

const router = Router();

/**
 * @swagger
 * /api/auth/login/:
 *   post:
 *     summary: Returns user info and session.
 *     description: Just as it is.
 *     parameters:
 *      - name: email
 *        in: body
 *        description: Email required for login.
 *        required: true
 *        schema:
 *          type: string
 *          example: ritchiepark6@gmail.com
 *      - name: password
 *        in: body
 *        description: User Password required for login.
 *        required: true
 *        schema:
 *          type: string
 *          example: 1234
 *     responses:
 *       200:
 *         description: Returns a message and user info.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.post('/', login);

export default router;