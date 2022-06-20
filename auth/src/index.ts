import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/api/users/currentuser', (req, res) => {
  res.send('Hi there! this is from docket');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000 ');
});
