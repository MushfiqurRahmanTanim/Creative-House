import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


import sessionMiddleware from './middleware/session.middleware';

import connectDB from './configs/connectDB';
import { errorMiddleware } from './middleware/error.middleware';



// Config DotEnv
dotenv.config();
// Port
const port = process.env.PORT || 8000;


const app = express();

// Connect MongoDB
connectDB();

//Bypassing CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(sessionMiddleware);

app.get('/api/demo', (req, res) => {
  res.json({ sessionId: req.sessionID });
});

// // Routes
// app.use('/api/user', userRoutes);

// error handlers
errorMiddleware(app)


// Log Server Connection
app.listen(port, () => console.log(`Server running on port ${port}`));
