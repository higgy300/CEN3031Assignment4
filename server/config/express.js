var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config.js'),
    listingsRouter = require('../routes/listings.server.routes');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri, {useMongoClient:true});

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware
  app.use(bodyParser.json());


  /* Serve static files */
  app.use('/', express.static(__dirname + '/../../client'));
  app.use('/public', express.static(__dirname + '/../../public'));

  /* Use the listings router for requests to the api */
  app.use('/api/listings', listingsRouter);

  /* Go to homepage for all routes not specified */
  app.all('/*', function(req, res) {
    res.sendFile(path.resolve('client/index.html'));
  });

  return app;
};
