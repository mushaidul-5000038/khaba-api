const { getAllUser } = require("../../controllers/user");

const ctr = async (req, res, next) => {
    try {
        let data = await getAllUser(JSON.stringify(req.body));
        console.log("sent data");
        if ((typeof data == "object" && "error" in data) || !data)
            res.status(406).json(data);
        else res.status(200).json(data);
        return next();
    } catch (e) {
        console.log(e);
        return next(e);
    }
};

module.exports = { ctr };
