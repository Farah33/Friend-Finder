// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//express app 

var app = express();
var PORT = process.env.PORT || 3000;

//Express to handle data parsing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(__dirname + '/app/public'));

// import routes
require('./app/routing/api-routes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// listen  the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});