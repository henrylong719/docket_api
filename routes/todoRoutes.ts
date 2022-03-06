import { Router } from 'express';
import { getTodos } from '../controller/todoController';
let router = Router();

router.route('/').get(getTodos);

export default router;
