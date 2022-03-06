import expressAsyncHandler from 'express-async-handler';
import db from '../db/index';

// $desc     Fetch all todos
// $route    GET /api/todos
// $access   Public

const getTodos =
  // for handling exceptions inside of async express routes and passing them to your express error handlers.
  expressAsyncHandler(async (req, res) => {
    const todoData = await db.query('SELECT * FROM todos');

    res.status(200).json({
      status: 'success',
      results: todoData.rows.length,
      data: {
        todos: todoData.rows,
      },
    });
  });

// $desc     Fetch single todo
// $route    GET /api/todos/:id
// $access   Public

const getTodoById = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  console.log(id);
  const todoData = await db.query('SELECT * FROM todos WHERE id = $1', [id]);

  res.status(200).json({
    status: 'success',
    data: {
      todo: todoData.rows[0],
    },
  });
});

export { getTodos, getTodoById };
