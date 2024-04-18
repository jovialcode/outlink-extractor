import express from 'express';
import dotenv from 'dotenv';

// init
dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});