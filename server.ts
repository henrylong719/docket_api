import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

import { notFound, errorHandler } from './middleware/errorMiddleware';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// morgan middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// anything goes to /api/note, linking to notesRoutes

// middleware to handle not found URL (./middleware/errorMiddleware.js)
app.use(notFound);

// middleware to handle error message (./middleware/errorMiddleware.js)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}!`);
});
