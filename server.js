require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Docket Server is listening on port ${port}`);
});
