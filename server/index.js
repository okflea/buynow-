import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/cars.js';
import path from 'path';

//configuration
dotenv.config();
console.log(process.env.MONGODB_URI);
//mongo connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const carsRouter = router
app.use('/api/cars', carsRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})
