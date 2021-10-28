const { getAllWaste } = require('../../controllers/waste');




const ctr = async (req, res, next) => {
    try {

        let data = await getAllWaste(JSON.stringify(req.body));
        console.log(data);
        if ((typeof data == 'object' && 'error' in data) || !data)
            res.status(406).json(data);
        else res.status(200).json(data);
        return next();
    } catch (e) {
        console.log(e);
        return next(e);
    }
};

module.exports = { ctr };