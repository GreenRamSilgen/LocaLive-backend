var express = require('express');
var router = express.Router();

//route importing
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

router.use('/', indexRouter);
router.use('/users',usersRouter);


module.exports = router;