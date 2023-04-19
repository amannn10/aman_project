import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import './config/db.js';
import UserRoutes from './routes/UserRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
const corsOrigin = {
  origin: 'http://localhost:3000', //or whatever port your frontend is using
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOrigin));
app.use('/api/user', UserRoutes);

app.get('/', (req, res) => {
  res.send('Working!!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
