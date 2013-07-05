var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // Read in index.html
  // output
  var filename = "/home/ubuntu/projects/bitstarter/index.html"
  response.send("test2");
 fs.readFile(filename, function (err, data) {
    if (err) throw err;
   var  buffer = new Buffer(data, "utf-8");
   response.send(buffer.toString());
  });

  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
