const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://localhost/omnimood';
const connection = mongoose.connect(MONGO_URL);
const Country = require('./models/countries');

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) =>{
  res.json(index);
});

app.get('/countries/api', (req, res) => {
  Country
  .find({})
  .then(results => res.json(results));
});

mongoose.connection.once('open', function() {
  const server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port ' + port);
  });
});