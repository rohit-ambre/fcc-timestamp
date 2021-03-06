// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/timestamp/:date_string",function(req,res){

  var timestamp = Date.parse(req.params.date_string ? req.params.date_string : new Date());

  if (isNaN(timestamp) == false) {
    var d = new Date(timestamp);
    res.json({"unix": d.getTime(), "utc" : d.toUTCString()})
  }else{
    res.json({"error" : "Invalid Date" })  
  }
  
});

//comment here
// listen for requests :)
var listener = app.listen(57305, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

module.exports = listener;