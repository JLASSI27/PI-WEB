const express = require('express');
const router = express.Router();
const reviewController = require('../../controllers/workshop/reviewController');

// Route pour créer un avis
router.post('/', reviewController.createReview);

// Route pour récupérer les avis d'un workshop spécifique
router.get('/:workshopId', reviewController.getWorkshopReviews);

module.exports = router;
