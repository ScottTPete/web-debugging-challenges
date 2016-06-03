// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// Controllers
var SightingCtrl = require('./controllers/SightingCtrl');
var UserCtrl = require('./controllers/UserCtrl');
var birdCtrl = require('./controllers/birdCtrl');


// Express
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoints
app.post('/sighting', SightingCtrl.create);
app.get('/sighting', SightingCtrl.read);
app.put('/sighting/:id', SightingCtrl.update);
app.delete('/sighting/:id', SightingCtrl.delete);

app.post('/user', UserCtrl.create);
app.get('/user', UserCtrl.read);
app.put('/user/:id', UserCtrl.update);
app.delete('/user/:id', UserCtrl.delete);

app.post('/bird', birdCtrl.create);
app.get('/bird', birdCtrl.read);
app.put('/bird/:id', birdCtrl.update);
app.delete('/bird/:id', birdCtrl.delete);

// Connections
var port = 8080;
var mongoUri = 'mongodb://localhost:27017/mini-birds-mongoose';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log('Connected to MongoDB at ', mongoUri);
});

app.listen(port, function() {
    console.log('Listening on port ', port);
});
