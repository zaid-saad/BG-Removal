import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import ConnectDB from './configs/mongodb.js';

// App Config
const PORT  = process.env.PORT || 4000
const app = express()
await ConnectDB()

// Initialize Middlewares
app.use(express.json())
app.use(cors())

// api routes
app.get('/', (req ,res) => res.send("API Working"))

app.listen(PORT , () => console.log("Server Running at Port "+ PORT))