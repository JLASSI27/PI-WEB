const express = require('express');
const router = express.Router();


const getOneOrganisateur=require('../../Controllers/userControllers/organisateur/getOne.controller');
const deleteOneOrganisateur=require('../../Controllers/userControllers/organisateur/deleteOne.controller');
const updateOneOrganisateur=require('../../Controllers/userControllers/organisateur/updateOne.controller');
const getAllOrganisateurs=require('../../Controllers/userControllers/organisateur/getAll.controller');




router.get('/getOne/:id',getOneOrganisateur)
router.get('/getAll',getAllOrganisateurs)
router.delete('/deleteOne/:id',deleteOneOrganisateur)
router.put('/updateOne/:id',updateOneOrganisateur)

module.exports = router;
