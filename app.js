const express = require('express');
<<<<<<< HEAD
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const depotRoutes = require('./Routes/depotRoutes');
const materielRoutes = require('./Routes/materielRoutes');
const errorHandler = require('./Middlewares/middlewaresJL/errorHandler');

const app = express();
mongoose.set('debug', true);

// Middleware
app.use(express.json());
app.use(errorHandler);

app.use((req, res, next) => {
    console.log(`Requête reçue : ${req.method} ${req.url}`);
    next();
});
app.get('/test', (req, res) => {
    res.send('Serveur fonctionnel !');
});
app.get('/test-error', (req, res) => {
    throw new Error('Ceci est une erreur de test');
});

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

// Base de données
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connecté'))
    .catch(err => console.error('❌ Erreur MongoDB:', err));

// Routes
app.use('/api/depots', depotRoutes);
app.use('/api/materiels', materielRoutes);

// Gestion des erreurs
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur sur le port ${PORT}`));
=======
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
require('./Controllers/userControllers/Auth/googleAuth.controller')
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const indexRoutes = require("./index.routes");
const passport = require("passport");

const app = express();

app.get("/",  (req, res)=> {
    res.send('<a href="/auth/google">auth with google</a>')
})


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
connectDB()
module.exports = app;
>>>>>>> origin/user
