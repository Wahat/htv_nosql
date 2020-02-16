const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb altas PUT YOUR OWN DATABASE LINK HERE
// https://mongoosejs.com/docs/connections.html
mongoose.connect('you mongodb url here', {useNewUrlParser:true}).then( () => {
    console.log('Connection to the database is successful!')
  })
  .catch( (err) => console.error(err));

mongoose.Promise = global.Promise;

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// listen for requests
app.listen(process.env.port || 3000, function(){
    console.log('now listening for requests');
});
