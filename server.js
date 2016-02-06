var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded());

//  uses and connects with front-end/client side files
app.use(express.static(__dirname + "./client/static"));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

//  connects with mongoose -> mongoDB
require('./server/config/mongoose.js')

//  connects with controllers
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

server = app.listen('8000', function() {
	console.log("WE LISTENING");
})