var express = require('express');
var http = require('http');

var app = express();
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/build'));

var server = http.createServer(app);

server.listen(port, function(){
  console.log('server started on port ' + port);
});
