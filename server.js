// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const morgan = require('morgan');
import express from 'express';


const app = express();

//configure env
dotenv.config();

//connect to database
connectDB();

//middleware
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send(`<h1> This is the first Test Express App running on ${PORT} </h1>`) 
});
const PORT =process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});