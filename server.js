const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1> This is the first Express App </h1>') 
});
const PORT =8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});