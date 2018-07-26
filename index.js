const express = require('express')
var app = require('express')();
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('/home/ubuntu/private.pem', 'utf8');
var certificate = fs.readFileSync('/home/ubuntu/file.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
var PORT = 8080;
var SSLPORT = 5000;

httpServer.listen(PORT, function() {
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
});
httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

app.use(express.static('public'))

// Welcome
app.get('/', function(req, res) {
    if(req.protocol === 'https') {
        res.status(200).send('Welcome to Safety Land!');
    }
    else {
        res.status(200).send('Welcome!');
    }
});