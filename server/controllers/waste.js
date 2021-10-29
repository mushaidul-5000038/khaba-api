const { Waste } = require('../models/db');
const { User } = require('../models/db');

exports.getRecentWaste = async (req) => {
    try {
        console.log(req == 'Rice')
        console.log(typeof 'Rice')
        let response = await (await Waste.findOne({ name: req })).populate({
            path: 'days',
            select: 'produced wasted createdAt'
        })
        if (response) {
            console.log(response.days.length)
            return { data: response };
        }
        return { error: 'User not found' };
    } catch (err) {
        console.log({ error: err, message: 'user controller userProfile' });
        return { error: err, message: 'Internal server error' };
    }
};

exports.postWaste = async (req) => {
    try {
        let user_email = req.email
        let user = await User.findOne({ email: user_email })
        if (user) {

            req.user_id = user._id
            let response = await Waste.create(req)
            if (response) {
                return { data: response };
            }
        }

        return { error: 'User not found' };
    } catch (err) {
        console.log({ error: err, message: 'user controller userProfile' });
        return { error: err, message: 'Internal server error' };
    }
};