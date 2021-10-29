const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemEachDaySchema = new Schema({
    produced: {
        type: String,
        required: true,
    },
    wasted: {
        type: String,
        required: true
    },
    item: {
        type: Schema.Types.ObjectId,
        required: true
    },
},
    {
        timestamps: true,
    }
);


const ItemEachDay = mongoose.model('ItemEachDay', itemEachDaySchema);



module.exports = ItemEachDay;