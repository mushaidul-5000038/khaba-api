const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemEachDaySchema = new Schema({
    produced: {
        type: Schema.Types.Decimal128,
        required: true,
    },
    wasted: {
        type: Schema.Types.Decimal128,
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