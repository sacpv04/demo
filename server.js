const express = require('express');
const path = require('path');
const cluster = require('cluster');
const http = require('http');
const app = express();
const port = process.env.PORT || 8000;

// sendFile will go here
app.get('/', function(req, res) {
  if (cluster.isWorker) {
    console.log(cluster.worker);
  }
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
