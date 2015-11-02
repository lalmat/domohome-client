// API Stuff
var express = require ('express');
var port    = 8090;
var app     = express();

// Serves all the libs files
app.use('/vuejs', express.static(__dirname+'/node_modules/vue/dist/'));
app.use('/minified', express.static(__dirname+'/node_modules/minified/'));
app.use('/', express.static(__dirname+'/app/'));

var server = app.listen(port);
console.log("Client Ready");
