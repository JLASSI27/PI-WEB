var express = require('express');
var router = express.Router();
const { Commande } = require('../Models/commande');
const { Produit } = require('../Models/produit');
//const stripe = require('stripe')('sk_test_51RAZ7yQQRVoj1jFFeHt6JbC4ZxFWNgu3BhbJimenhXfSVROReopVIpCUg6VPOlHZL4tQtqfe7wmzgnMm2bJJgiwI001D7CQSmH');

const {addcommande,getcommande,getcommandeByid,deletetcommande,updatecommande,addpaiement,CommandePDF,sendCommandePDFByEmail } = require('../controllers/commande/commandeController'); 


router.post('/commande', addcommande ) 
 

router.get('/commande', getcommande)


router.get('/commande/:id', getcommandeByid) 

router.delete('/commande/:id', deletetcommande) 
   
   
router.put('/commande/:id', updatecommande)

//router.post('/paiement/:commandeId',addpaiement) 
router.post('/commande/:commandeId/paiement',addpaiement);

router.get('/commande/:id/pdf', CommandePDF);
router.get('/commande/:id/send-pdf', sendCommandePDFByEmail);




module.exports = router;