var express = require('express');
var router = express.Router();
// var request = require('request')

// check status
router.get('/', (req, res, ext) => {
    message = {
        mess: "OK~"
    }
    res.send(message)    // res.sendFile(path.join(__dirname + '/public/index.html')) 
})

const sensor = require('./mobile');
router.use('/sendgps', sensor);

const model = require('./model');
router.use('/model', model);



module.exports = router;
