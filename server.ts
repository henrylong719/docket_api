import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

<<<<<<< HEAD
// Routes
import noteRoutes from './routes/noteRoutes';
import todoRoutes from './routes/todoRoutes';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
=======
import noteRoutes from './routes/noteRoutes';
import todoRoutes from './routes/todoRoutes';

// Routes

//  require and configure dotenv.
dotenv.config();
const app = express();
>>>>>>> 291ffedff0415ead8afafdb3dab99ac432feef6d

// morgan middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

<<<<<<< HEAD
=======
app.use(cors());
app.use(express.json());

>>>>>>> 291ffedff0415ead8afafdb3dab99ac432feef6d
// anything goes to /api/note, linking to notesRoutes
app.use('/api/notes', noteRoutes);
app.use('/api/todos', todoRoutes);

<<<<<<< HEAD
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}!`);
=======
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Docket Server is listening on port ${port}`);
>>>>>>> 291ffedff0415ead8afafdb3dab99ac432feef6d
});
