const express = require('express');
const router = express.Router();
const workshopController = require('../../Controllers/./Workshop/workshopController');
const { validateWorkshop } = require('../../Middlewares/workshop/validateWorkshop');

// La route POST utilise le middleware de validation puis appelle le contrôleur
router.post('/', validateWorkshop, workshopController.createWorkshop);

// Route pour les recommandations de workshops
router.get('/recommend', workshopController.recommendWorkshops);

router.get('/', workshopController.getWorkshops);
router.get('/:id', workshopController.getWorkshopById);
router.put('/:id', workshopController.updateWorkshop);
router.delete('/:id', workshopController.deleteWorkshop);

// Nouvelle route pour récupérer la moyenne des avis d'un Workshop
router.get('/:workshopId/average-rating', workshopController.getWorkshopAverageRating);

module.exports = router;
