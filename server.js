var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);

app.use('/', express.static(__dirname + '/public'));

// Load any undefined ENV variables form a specified file.
// env(__dirname + '/.env');

var port = process.env.PORT || 5000;
// server.listen(port, 'localhost');
server.listen(port);
server.on('listening', function() {
  console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
