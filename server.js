const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
