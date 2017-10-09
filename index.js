const express = require('express');
const router = require('./router');

const app = express();

app.set('view engine', 'ejs');

app.use(router);

app.use(express.static('public'));

app.listen(8080, () => {
  console.log('Server is listening to http://localhost:8080');
});
