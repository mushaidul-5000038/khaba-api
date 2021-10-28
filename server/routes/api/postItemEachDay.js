const { postItemEachDay } = require('../../controllers/itemEachDay');




const ctr = async (req, res, next) => {
    try {
        console.log(req.body, 'sdfsdfsd')

        let data = await postItemEachDay(JSON.parse(JSON.stringify(req.body)));
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