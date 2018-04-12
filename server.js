// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//express config, this sets up express server 

var app = express();
var PORT = process.env.PORT || 3000;

// BodyParser makes it easy for our server to interpret data sent to it.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// router points our server to a series of "route" files.

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// listen  the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});