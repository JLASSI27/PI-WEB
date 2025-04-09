const express = require('express');
const router = express.Router();
const loginController = require('../../Controllers/userControllers/Auth/login.controller');
const userRegisterController = require('../../Controllers/userControllers/user/userRegister.controller');
const organisateurRegisterController = require('../../Controllers/userControllers/organisateur/organisateurRegister.controller');
const {verifyEmail} = require("../../Controllers/userControllers/Auth/mailVerification.controller");
const codeVerification = require('../../Controllers/userControllers/Auth/verificationCode.controller');
const {forgotPassword,changePassword} = require('../../Controllers/userControllers/Auth/forgotPassword.controller');
router.post('/login', loginController);
router.get('/verify',verifyEmail)
router.post('/userRegister', userRegisterController);
router.post('/organisateurRegister', organisateurRegisterController);
router.post('/verifyCode', codeVerification);
router.post('/resetPassword', forgotPassword);
router.get('/reset-password/:token', changePassword);

module.exports = router;