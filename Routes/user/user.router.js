const express = require('express');
const router = express.Router();


const getOneUser=require('../../Controllers/userControllers/user/getOne.controller');
const deleteOneUser=require('../../Controllers/userControllers/user/deleteOne.controller');
const updateOneUser=require('../../Controllers/userControllers/user/updateOne.controller');
const getAllUsers=require('../../Controllers/userControllers/user/getAll.controller');




router.get('/getOne/:id',getOneUser)
router.get('/getAll',getAllUsers)
router.delete('/deleteOne/:id',deleteOneUser)
router.put('/updateOne/:id',updateOneUser)

module.exports = router;
