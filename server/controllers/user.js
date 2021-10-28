const { User } = require('../models/db');

exports.getAllUser = async (userBody) => {
    try {
        console.log(User)
        let user = await User.find()
        if (user) {
            console.log(user)
            return { data: user };
        }
        return { error: 'User not found' };
    } catch (err) {
        console.log({ error: err, message: 'user controller userProfile' });
        return { error: err, message: 'Internal server error' };
    }
};