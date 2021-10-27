// import express
const express = require('express');

// have to include and config for the dotenv file7
require("dotenv").config();

// instantiate app
const app = express();

// add support to parsing json in the body
app.use(express.json());

// tell app to use static pages
app.use(express.static("./public"));

// bring in the path module to set up as independent path for static page
const path = require('path');

const port = process.env.PORT;

// root route for the app should connect to our static public html index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + './public/index.html'))
});

// tell app to use customers route - and where
const custRoute = require('./routers/customers');
app.use('/users', custRoute);

// tell app to use parts route - and where
const partsRoute = require('./routers/parts');
app.use('/users', partsRoute);

app.listen(port, () => console.log(`Dead Rite is listening on port ${port}`))