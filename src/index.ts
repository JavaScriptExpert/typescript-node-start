
//alternative import approaches...
//import http = require('http');
import * as http from 'http'

import handler from './handler'
var h = new handler("chuck the man");

console.log(h.getName());

// make a request
var options = {
  port: 80,
  hostname: "www.msn.com",
  headers: {
    "User-Agent": "Mozilla"
  }
};

var req = http.request(options, (res) => {
  var totalChunks = 0;
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    totalChunks++;
    //console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response. Total Chunks: %d', totalChunks);
  });
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

// write data to request body
//req.write("foo");
req.end();

