const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wasteSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user_id: {
        type: Object,
    },
    days: [{ type: Schema.Types.ObjectId, ref: 'ItemEachDay' }]


});


const Waste = mongoose.model('wasteData', wasteSchema);

console.log(Waste)


module.exports = Waste;
