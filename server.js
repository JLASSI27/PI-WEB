const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const workshopRoutes = require('./routes/workshop/workshoproutes');
const enrollmentRoutes = require('./routes/workshop/enrollmentroutes');
const reviewRoutes = require('./routes/workshop/reviewroutes'); // Ajout des routes d'avis

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use('/api/workshops', workshopRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/reviews', reviewRoutes); // Ajout de la route des avis

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
