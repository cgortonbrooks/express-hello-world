//  Require the directories and js files
const express = require("express");
const app = express();
const path = require('path');
//const config = require(__dirname + '/config.js')
const port = process.env.PORT || 3001;

// send all the static stuff
app.use(express.static(path.join(__dirname + '/public')));

// home page
app.get('/', async function (req, res) {
  res.type('html').sendFile(path.join(__dirname + '/public/index.html'));
});

// http://localhost:3001/
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
