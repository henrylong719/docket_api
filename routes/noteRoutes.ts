import { Router } from 'express';
import { getNoteById, getNotes } from '../controller/noteController';
let router = Router();

router.route('/').get(getNotes);

router.route('/:id').get(getNoteById);

export default router;
