const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1> This is the first Test Express App </h1>') 
});
const PORT =process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});