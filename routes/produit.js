var express = require('express');
var router = express.Router();
const { Produit, produitValidationSchema } = require('../models/produit'); 
const validate = require('../middleweares/validate');

const {addproduit,getproduit,deleteproduit, updateproduit, getproduitById} = require('../controllers/produit/produitContoller'); 

router.get('/produit', getproduit) 

router.post('/produit', validate(produitValidationSchema), addproduit)

router.delete('/produit/:id', deleteproduit) 

router.put('/produit/:id',validate(produitValidationSchema), updateproduit)


router.get('/produit/:id', getproduitById) 


module.exports = router;  
