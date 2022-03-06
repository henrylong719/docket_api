import { Router } from 'express';
import { getTodoById, getTodos } from '../controller/todoController';
let router = Router();

router.route('/').get(getTodos);

router.route('/:id').get(getTodoById);

export default router;
