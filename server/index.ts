import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'


// Config DotEnv
dotenv.config()

const app = express();
// Port
const port = process.env.PORT || 5000;

//Bypassing CORS
app.use(cors());


// Log Server Connection
app.listen(port, () => console.log(`Server running on port ${port}`));