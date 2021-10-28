const mongoose = require('mongoose');
//require('dotenv').config();
const MONGO_URL = 'mongodb+srv://admin-aryan:accessNow@clusterkhaba.ssvu8.mongodb.net/khaba?retryWrites=true&w=majority'
mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((e) => {
        console.log(e);
    })
    .then(() => {
        console.log(`Connected to khaba`);
    });

module.exports.User = require('./User');
module.exports.Waste = require('./Waste');