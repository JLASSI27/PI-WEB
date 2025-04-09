const Workshop = require('../../Models/workshop/Workshop');
const Enrollment = require('../../Models/workshop/Enrollment');
const Review = require('../../Models/workshop/Review');  // Assurez-vous que ce modèle est importé

exports.createWorkshop = async (req, res) => {
    try {
        const workshop = new Workshop(req.body);
        await workshop.save();
        res.status(201).json(workshop);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getWorkshops = async (req, res) => {
    try {
        const workshops = await Workshop.find();
        res.json(workshops);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getWorkshopById = async (req, res) => {
    try {
        const workshop = await Workshop.findById(req.params.id);
        if (!workshop) return res.status(404).json({ error: "Workshop non trouvé" });
        res.json(workshop);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateWorkshop = async (req, res) => {
    try {
        const workshop = await Workshop.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(workshop);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteWorkshop = async (req, res) => {
    try {
        await Workshop.findByIdAndDelete(req.params.id);
        res.json({ message: "Workshop supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Fonction de recommandation de workshops
exports.recommendWorkshops = async (req, res) => {
    try {
        const { email } = req.query;

        if (!email) {
            return res.status(400).json({ error: "L'email est requis pour obtenir des recommandations." });
        }

        const enrollments = await Enrollment.find({ email }).populate('workshopId');
        if (!enrollments.length) {
            return res.status(404).json({ message: "Aucune inscription trouvée pour cet utilisateur" });
        }

        const categories = [...new Set(enrollments.map(enroll => enroll.workshopId.category))];

        const recommendedWorkshops = await Workshop.find({
            category: { $in: categories },
            _id: { $nin: enrollments.map(enroll => enroll.workshopId._id) }
        });

        res.json(recommendedWorkshops);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Fonction pour obtenir la moyenne des avis d'un Workshop
exports.getWorkshopAverageRating = async (req, res) => {
    try {
        const { workshopId } = req.params;

        // Récupérer le Workshop
        const workshop = await Workshop.findById(workshopId);
        if (!workshop) {
            return res.status(404).json({ message: "Workshop non trouvé" });
        }

        // Récupérer tous les avis pour ce Workshop
        const reviews = await Review.find({ workshopId });

        // Calculer la moyenne des notes
        const averageRating = reviews.length > 0 
            ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length 
            : 0;

        // Retourner la moyenne des notes
        res.json({ averageRating });
    } catch (error) {
        console.error("Erreur lors de la récupération de la moyenne des notes :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};
