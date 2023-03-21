const express = require('express');
const path = require('path');
const cluster = require('cluster');
const http = require('http');
const app = express();
const Fs = require('fs')
const request = require('request');
// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/build', function(req, res) {

  request('http://35.77.33.182:30008/build', function (error, response, body) {
      if (!error && response.statusCode === 200) {
          console.log(body) 
      }
  });
  if (cluster.isWorker) {
    console.log(cluster.worker);
  }

  res.sendFile(path.join(__dirname, '/build.html'));
});
app.get('/test', function(req, res) {

  request('http://35.77.33.182:30008/test', function (error, response, body) {
      if (!error && response.statusCode === 200) {
          console.log(body) 
      }
  });
  if (cluster.isWorker) {
    console.log(cluster.worker);
  }
  res.sendFile(path.join(__dirname, '/test.html'));
});
app.get('/analysis', function(req, res) {
  request('http://35.77.33.182:30008/analysis', function (error, response, body) {
      if (!error && response.statusCode === 200) {
          console.log(body) 
      }
  })
  if (cluster.isWorker) {
    console.log(cluster.worker);
  }
  res.sendFile(path.join(__dirname, '/analysis.html'));
});

app.get('/build', function(req, res) {
  createdDate('build.txt');
  res.sendStatus(200);
});
app.get('/test', function(req, res) {
  createdDate('test.txt');
  res.sendStatus(200);
});
app.get('/analysis', function(req, res) {
  createdDate('analysis.txt');
  res.sendStatus(200);
});
function createdDate (file) {  
  const { birthtime } = Fs.statSync(file)

  return birthtime
}
app.listen(30008);

