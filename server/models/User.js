const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    contact: {
        type: String,
        required: true,
    },

    address: {
        type: String,
    },

    passHash: {
        type: String,
        required: true,
    },

    lastLoggedIn: {
        type: String,
    },

},
    {
        timestamps: true,
    }

);


const User = mongoose.model('user', userSchema);



module.exports = User;
