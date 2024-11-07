import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import factsRoute from './routes/factsRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing
app.use(express.json());

// Middware to handle CORS policy (Cross-origin) Resourse Sharing
app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type']
    })
);

// Запрос GET
app.get('/', (request, response) => {
    // console.log(request);
    return response.status(234).send("Welcome to Useful Facts!");
});

app.use('/facts', factsRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }).catch((error) => {
        console.log(error);
    })