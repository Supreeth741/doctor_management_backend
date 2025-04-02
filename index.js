import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { successMessage } from './utils/success.js';
// import userRoute from './src/user/user.route.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    successMessage("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// app.use('/auth', userRoute)

//Response handler Middelware
app.use((obj, req, res, next) => {
  const statusCode = obj.status || 500;
  const message = obj.message || "Something went wrong !";
  return res.status(statusCode).json({
      success: [200,201,204].some(a => a === obj.status) ? true : false,
      status: statusCode,
      message: message,
      data: obj.data
  });
});

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

app.listen(PORT, HOST, () => {
  successMessage(`Server running at http://${HOST}:${PORT}/`);
});