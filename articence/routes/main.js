var express = require('express');
var router = express.Router();
var ctrlMain = require("./routes");

router.get('/', ctrlMain.index);

module.exports=router;