const router = require('express').Router();
const getUser = require('./api/getUser')
const getWaste = require('./api/getWaste')
const postWaste = require('./api/postWaste')

router.get('/getUser', getUser.ctr);
router.get('/getWaste', getWaste.ctr);

router.post('/postWaste', postWaste.ctr);




module.exports = router;