const express = require('express');
const path = require('path');
const cluster = require('cluster');
const http = require('http');
const app = express();

// sendFile will go here
app.get('/', function(req, res) {
  if (cluster.isWorker) {
    console.log(cluster.worker);
  }
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.listen(3000);
