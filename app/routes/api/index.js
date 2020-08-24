const express = require('express');
const router = express.Router();
const securRouter = require('./secur')
const authRouter = require('./auth')
router.use('/auth' , authRouter);
router.use('/user' , securRouter);
module.exports = router;