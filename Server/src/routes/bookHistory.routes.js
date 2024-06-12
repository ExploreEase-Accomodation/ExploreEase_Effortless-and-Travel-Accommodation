import { Router } from 'express';
import { getUserBookHistory } from '../controllers/bookHistory.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

router.route('/history').get(verifyJWT, getUserBookHistory);

export default router;


























