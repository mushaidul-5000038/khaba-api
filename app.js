const express = require('express');
const apiRouter = require('./server/routes/router');
require('./server/models/db');

const app = express();
const port = "4200"
const mongoose = require('mongoose');

//require('dotenv').config();

//routing
app.use('/', apiRouter);

app.listen(port, () => {
    console.log('API listening on port ' + port);
});

