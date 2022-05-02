// import expressAsyncHandler from 'express-async-handler';
// import db from '../db/index';

// // $desc     Fetch all notes
// // $route    GET /api/notes
// // $access   Public

// const getNotes = expressAsyncHandler(async (req, res) => {
//   const notesData = await db.query('SELECT * FROM notes');

//   res.status(200).json({
//     status: 'success',
//     results: notesData.rows.length,
//     data: {
//       todos: notesData.rows,
//     },
//   });
// });

// // $desc     Fetch single note
// // $route    GET /api/notes/:id
// // $access   Public

// const getNoteById = expressAsyncHandler(async (req, res) => {
//   const { id } = req.params;

//   const noteData = await db.query('SELECT * FROM notes WHERE id = $1', [id]);

//   res.status(200).json({
//     status: 'success',
//     data: {
//       note: noteData.rows[0],
//     },
//   });
// });

// export { getNotes, getNoteById };
