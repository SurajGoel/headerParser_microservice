var express = require("express");
var app = express();

app.get('/api/whoami', function(req, res) {
    res.end(JSON.stringify( {
        "ipaddress" : req.headers['x-forwarded-for'],
        "language" : req.headers['accept-language'],
        "software" : req.headers['user-agent']
    }));
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Listening');
});