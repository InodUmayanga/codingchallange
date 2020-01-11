const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const cardsRoutes = require('./routes/cards');

const app = express();

mongoose.connect('mongodb+srv://inod:'
  + process.env.MONGO_ATLAS_PW
  + '@cluster0-oeodj.mongodb.net/colombo-night-life-deploy-3?retryWrites=true&w=majority')
  .then(() => {
    console.log('successfully connected to DB!');
  })
  .catch(() => {
    console.log('Connection faliure');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/images', express.static(path.join("images")));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');

  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, POTIONS');

  next();
});

app.use('/api/cards', cardsRoutes);

module.exports = app;
