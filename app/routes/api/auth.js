const express = require('express');
const router = express.Router();


// Controllers
const loginController = require('app/http/controllers/auth/loginController');
const registerController = require('app/http/controllers/auth/registerController');


// validators 
const registerValidator = require('app/http/validators/registerValidator');
const loginValidator = require('app/http/validators/loginValidator');




router.post('/login' , loginValidator.handle() ,loginController.loginProccess);

router.post('/register' , registerValidator.handle() , registerController.registerProccess);


module.exports = router;