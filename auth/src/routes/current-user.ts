import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
  res.send('Hi there! this is from docket');
});

export { router as currentUserRouter };
