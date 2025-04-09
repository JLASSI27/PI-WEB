var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const configDb = require("./config/db.json");
//const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc'); // Remplacez par votre propre clé secrète Stripe

var produitRouter = require('./Routes/produit');
var commandeRouter = require('./Routes/commande');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



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
app.use(function(req, res, next) {
  next(createError(404));
});

// Gestion des erreurs globales
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
