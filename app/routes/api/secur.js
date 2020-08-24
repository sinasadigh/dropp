const express = require('express');
const router = express.Router();
const passport = require('passport');

// Controllers
const profileController = require('app/http/controllers/auth/profileController');
router.get('/profile',passport.authenticate('jwt', { session : false }),profileController.profile)

module.exports = router;