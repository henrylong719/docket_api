import { Router } from 'express';
import { getNotes } from '../controller/noteController';
let router = Router();

router.route('/').get(getNotes);

export default router;
