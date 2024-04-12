import { Router } from 'express';

import {
    getConfirmCode,
    validateConfirmCode,
    confirmDelete,
    registerUser
} from './register.ctrl';

const router = Router();

/**
 * @swagger
 * /api/auth/register/confirm:
 *   get:
 *     summary: Returns an confirm code for verification.
 *     description: Just as it is.
 *     tags: [Register]
 *     responses:
 *       200:
 *         description: Returns a confirm code.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: number
 *                   example: 1234567
 */
// 회원가입 요청 시에 확인코드 전달
router.get('/confirm', getConfirmCode);

/**
 * @swagger
 * /api/auth/register/confirm:
 *   post:
 *     summary: Returns user info and session.
 *     description: Just as it is.
 *     tags: [Register]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *          schema:
 *            type: object
 *            properties:
 *              code:
 *                type: number
 *                example: 1234567
 *              url:
 *                type: number
 *                example: 1234567
 *     responses:
 *       200:
 *         description: Returns a message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Valid code
 *       400:
 *         description: Invalid request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid request
 */
// 마비노기 공식 홈페이지에 확인코드 확인
router.post('/confirm', validateConfirmCode);

/**
 * @swagger
 * /api/auth/register/delete:
 *   delete:
 *     summary: Confirm the post on official website is deleted.
 *     description: Just as it is.
 *     tags: [Register]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *          schema:
 *            type: object
 *            properties:
 *              code:
 *                type: number
 *                description: The confirm code.
 *                example: 1234567
 *     responses:
 *       200:
 *         description: Returns a message.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
// 마비노기 공식 홈페이지의 게시글 삭제 확인
router.delete('/confirm/delete/:code', confirmDelete);

/**
 * @swagger
 * /api/auth/register/:
 *   post:
 *     summary: Register the user info.
 *     description: Just as it is.
 *     tags: [Register]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                description: The confirm code.
 *                example: 1234567
 *              password:
 *                type: number
 *                description: The confirm code.
 *                example: 1234567
 *              confirm:
 *                type: number
 *                description: The confirm code.
 *                example: 1234567
 *     responses:
 *       200:
 *         description: Succesfully registered.
 */
// 확인코드 검증 이후 회원가입
router.post('/', registerUser);

export default router;