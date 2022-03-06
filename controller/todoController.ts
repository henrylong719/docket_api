import expressAsyncHandler from 'express-async-handler';
import db from '../db/index';

// $desc     Fetch all products
// $route    GET /api/products
// $access   Public

const getTodos =
  // for handling exceptions inside of async express routes and passing them to your express error handlers.
  expressAsyncHandler(async (req, res) => {
    const todoData = await db.query('SELECT * FROM todos');
    res.status(200).json(todoData.rows);
  });

export { getTodos };
