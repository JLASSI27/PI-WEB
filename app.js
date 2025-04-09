<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
=======
>>>>>>> origin/Mouna-events
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
<<<<<<< HEAD
const mongoose = require("mongoose");
const configDb = require("./config/db.json");
//const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc'); // Remplacez par votre propre clé secrète Stripe

var produitRouter = require('./Routes/produit');
var commandeRouter = require('./Routes/commande');
=======
const cors = require('cors');



const mongoose= require ("mongoose")
const configDb = require ("./Config/db.json");

var eventsRouter = require('./Routes/event');
var packsRouter = require('./Routes/pack');
var reservsRouter = require('./Routes/reservation');
var servicesRouter = require('./Routes/service');





>>>>>>> origin/Mouna-events

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
<<<<<<< HEAD
>>>>>>> origin/ghazi_nasri
=======
>>>>>>> origin/Mouna-events

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD

<<<<<<< HEAD
app.use("/", indexRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
connectDB()
module.exports = app;
>>>>>>> origin/user
=======
const express = require("express");
const http = require("http");
const path = require("path");
const mongoose = require("mongoose");
var morgan = require('morgan')
const configDb = require("./config/db.json");

require('dotenv').config();

const blogRouter = require('./Routes/blogRouters');
const commentRouter = require('./Routes/commentRouters');
const chatbotRouter = require('./Routes/chatbotRouter');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"))
app.use('/img', express.static('public/images'));

app.use('/api/chatbot', chatbotRouter);
app.use('/blog', blogRouter);
app.use('/comment', commentRouter);

mongoose.connect(configDb.mongo.uri)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
>>>>>>> origin/meher_moumni
=======
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const workshopRoutes = require('./Routes/workshop/workshoproutes');
const enrollmentRoutes = require('./Routes/workshop/enrollmentroutes');
const reviewRoutes = require('./Routes/workshop/reviewroutes'); // Ajout des Routes d'avis

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
>>>>>>> origin/LMarwa
=======


app.use('/', produitRouter);
app.use('/', commandeRouter);
//app.use('/api', commandeRouter);
app.use('/api', commandeRouter);

// Connexion à MongoDB avec messages de succès et d'échec
mongoose.connect(configDb.mongo.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log(" Connexion à MongoDB réussie !");
});

db.on("error", (err) => {
  console.error(" Échec de la connexion à MongoDB :", err);
});

db.on("disconnected", () => {
  console.warn(" Connexion à MongoDB interrompue.");
});

// Gestion des erreurs 404
=======
app.use(cors({
  origin: 'http://localhost:4200', // URL de ton frontend Angular
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

app.use('/uploads', express.static('uploads'));




app.use('/', eventsRouter);
app.use('/', packsRouter);
app.use('/', reservsRouter);
app.use('/', servicesRouter);








// catch 404 and forward to error handler
>>>>>>> origin/Mouna-events
app.use(function(req, res, next) {
  next(createError(404));
});

<<<<<<< HEAD
// Gestion des erreurs globales
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

=======
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
>>>>>>> origin/Mouna-events
  res.status(err.status || 500);
  res.render('error');
});

<<<<<<< HEAD
module.exports = app;
>>>>>>> origin/ghazi_nasri
=======

mongoose.connect(configDb.mongo.uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion à MongoDB réussie !');
  })
  .catch((err) => {
    console.error('Erreur de connexion à MongoDB :', err);
  });


module.exports = app;
>>>>>>> origin/Mouna-events
