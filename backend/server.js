import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'
import { connectDb } from './config/connectdb.js';
import authRoutes from './routes/authRoutes.js'
import noteRouter from './routes/noteRoutes.js';
dotenv.config();


const app = express();
const port = process.env.PORT || 4000;
await connectDb();
// Middleware
app.use(cors());
app.use(express.json());

// test route
app.use('/api/user', authRoutes);
app.use('/api/notes', noteRouter);
app.get("/", (req, res) => {
  res.send("API Running...");
});
app.listen(port, () => {
    console.log("server is running on port " + port);
})