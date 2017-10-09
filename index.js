const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express client');
});
app.get('/list', (req, res) => {
  res.send('Hello List');
});
app.get('/details', (req, res) => {
  res.send('Hello Details');
});

app.listen(8080, () => {
  console.log('listening');
});
