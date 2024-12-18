const express = require('express');
const { signUp } = require('./../controllers/authController');
const { validateSignUpData } = require('./../middlewares/validationMiddleware');

const router = express.Router();

router.post('/signup', validateSignUpData, signUp);

module.exports = router;
