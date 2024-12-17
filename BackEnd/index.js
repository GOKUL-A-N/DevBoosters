import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import http from 'http';
import dotenv from 'dotenv';

const app = express();

app.use(cookieParser());

dotenv.config()

app.use(express.json());


app.get('/', (req,res) => {
    res.status(200).send("Welcome back chief!")
})

const server = http.createServer(app);

const port = process.env.PORT

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected");
        server.listen(port,() => {
            console.log(`App listening on port ${port}`);
        });
    })
    .catch(err => {
        console.log(`Failed to connect to port ${err.message}`);
    })