import expressAsyncHandler from 'express-async-handler';
import db from '../db/index';

// $desc     Fetch all notes
// $route    GET /api/notes
// $access   Public

const getNotes =
  // for handling exceptions inside of async express routes and passing them to your express error handlers.
  expressAsyncHandler(async (req, res) => {
    const todoData = await db.query('SELECT * FROM notes');
    res.status(200).json(todoData.rows);
  });

export { getNotes };
