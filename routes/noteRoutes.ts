import { Router } from 'express';

let router = Router();

router.get('/', (req, res) => {
  res.send('notes');
});

export default router;
