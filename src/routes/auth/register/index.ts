import { Router } from 'express';

import {
    getConfirmCode,
    validateConfirmCode,
    confirmDelete,
    registerUser
} from './register.ctrl';

const router = Router();

// 회원가입 요청 시에 확인코드 전달
router.get('/confirm', getConfirmCode);

// 마비노기 공식 홈페이지에 확인코드 확인
router.post('/confirm', validateConfirmCode);

// 마비노기 공식 홈페이지의 게시글 삭제 확인
router.post('/confirm/delete', confirmDelete);

// 확인코드 검증 이후 회원가입
router.post('/', registerUser);

export default router;