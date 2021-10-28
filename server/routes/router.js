const router = require('express').Router();
const postItemEachDay = require('./api/postItemEachDay');
const getUser = require('./api/getUser')
const getWaste = require('./api/getWaste')
const postWaste = require('./api/postWaste')

router.get('/getUser', getUser.ctr);

//use this for the table make sure to send the req using a name variable
router.get('/getWaste', getWaste.ctr);

//router.post('/postWaste', postWaste.ctr);

//use this for the input
router.post('/postItemEachDay', postItemEachDay.ctr);




module.exports = router;