const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./server/routes/router');
require('./server/models/db');


const app = express();
const port = "4200"
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//require('dotenv').config();

//routing
app.use('/', apiRouter);

app.listen(port, () => {
    console.log('API listening on port ' + port);
});

module.exports = app