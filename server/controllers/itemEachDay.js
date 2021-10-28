const { ItemEachDay } = require('../models/db');
const { Waste } = require('../models/db');

// exports.getRecentWaste = async (req) => {
//     try {
//         console.log(Waste)
//         let response = await Waste.find().sort({ createdAt: -1 }).limit(10)
//         if (response) {
//             console.log(response)
//             return { data: response };
//         }
//         return { error: 'User not found' };
//     } catch (err) {
//         console.log({ error: err, message: 'user controller userProfile' });
//         return { error: err, message: 'Internal server error' };
//     }
// };

exports.postItemEachDay = async (req) => {
    try {
        const item = await Waste.findOne({ name: req.item });

        if (!item) {
            return { error: 'Item not found' };
        }

        const itemEachDay = await ItemEachDay.create({
            produced: req.produced,
            wasted: req.wasted,
            item: item._id,
        });

        const entryAdded = await Waste.findOneAndUpdate(
            { _id: item._id },
            {
                $addToSet: {
                    days: itemEachDay,
                },
            }
        );

        if (!entryAdded) {
            return { error: 'Item not found' };
        }

        return itemEachDay;
    } catch (err) {
        console.log({ error: err, message: 'user controller userProfile' });
        return { error: err, message: 'Internal server error' };
    }
};