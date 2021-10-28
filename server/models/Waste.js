const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wasteSchema = new Schema({
    item1: {
        type: String,
        required: true,
    },

    item2: {
        type: String,
        required: true,
    },

    item3: {
        type: String,
    },

    item4: {
        type: String,

    },

    user_id: {
        type: Object,
    },

},
    {
        timestamps: true,
    }
);


const Waste = mongoose.model('wasteData', wasteSchema);



module.exports = Waste;
