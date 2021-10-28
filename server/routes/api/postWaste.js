const { postWaste } = require('../../controllers/waste');




const ctr = async (req, res, next) => {
    try {
        console.log(req.query, 'sdfsdfsd')
        req.query.date = (new Date(Date.now())).toISOString()
        let data = await postWaste(JSON.parse(JSON.stringify(req.query)));
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