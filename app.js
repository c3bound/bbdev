'use strict';

const http = require('http');
const mongoose = require('mongoose');

const port = process.env.PORT || 1337;

mongoose.connect('mongodb://216.150.149.11:27017/BlackBoxBeta');

Post = mongoose.model('AlertStreamNasdaq', { title: String });



http.createServer((req, res) => {
  Post.find((err, posts) => {
    if(err) {
      return console.log(err);
    }
    console.log(posts);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(posts));
  })
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
