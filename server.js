const express = require('express');
const app = express();

app.get('/', function (req, res) {
       res.send('Hello Dev!');
   });

// Listen to port 5000
app.listen(5000, function () {
   console.log('Dev app listening on port 5000!');
   });
