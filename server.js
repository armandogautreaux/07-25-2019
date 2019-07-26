var express = require('express');
var app = express();
var expbhs = require('express-handlebars');
var apiRoutes = require('./routes/apiRoutes.js');
var db = require('./models');

var PORT = process.env.PORT || 9000;

app.use(express.static('public'));

//midleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static folder

//handelabars

//routes
app.use(apiRoutes);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log('connected');
  });
});
