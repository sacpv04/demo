const express = require('express');
const path = require('path');
const cluster = require('cluster');
const http = require('http');
const app = express();
const Fs = require('fs')
const request = require('request');
// sendFile will go here
app.get('/build', function(req, res) {
  createdDate('/tmp/build.txt');
  res.sendStatus(200);
});
app.get('/test', function(req, res) {
  createdDate('/tmp/test.txt');
  res.sendStatus(200);
});
app.get('/analysys', function(req, res) {
  createdDate('/tmp/analysys.txt');
  res.sendStatus(200);
});
function createdDate (file) {
  let date_ob = new Date();
  console.log(date_ob);
  Fs.writeFile(file, `${file} ${JSON.stringify(date_ob)}`, error => {

  });
}
app.listen(8081);

