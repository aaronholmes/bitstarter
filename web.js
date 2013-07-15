var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var filename = __dirname + "/index.html";
  fs.readFile(filename, 'utf8', function (err,data) {
    if (err) {
      return response.send(err);
    }
    var buffer = new Buffer(data);
    response.send(buffer.toString());
  });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
