const { Waste } = require('../models/db');
const { User } = require('../models/db');

exports.getAllWaste = async (req) => {
    try {
        console.log(Waste)
        let response = await Waste.find()
        if (response) {
            console.log(response)
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

            console.log(user.type)
            let response = await Waste.create(req)
            if (response) {
                console.log(response)
                return { data: response };
            }
        }

        return { error: 'User not found' };
    } catch (err) {
        console.log({ error: err, message: 'user controller userProfile' });
        return { error: err, message: 'Internal server error' };
    }
};