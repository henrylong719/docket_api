import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

import noteRoutes from './routes/noteRoutes';
import todoRoutes from './routes/todoRoutes';

// Routes

//  require and configure dotenv.
dotenv.config();
const app = express();

// morgan middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

// anything goes to /api/note, linking to notesRoutes
app.use('/api/notes', noteRoutes);
app.use('/api/todos', todoRoutes);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Docket Server is listening on port ${port}`);
});
