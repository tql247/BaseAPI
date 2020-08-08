var express = require('express');
var router = express.Router();

router.post("/", (req, res, ext) => {
    var latlng = req.body.latlng || 'nothing'
    console.log(latlng)
    var message = {
      mess: `You send ${latlng}`
    }
  
    res.send(message)
})

module.exports = router;