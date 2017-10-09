const express = require('express');
const router = require('./router');

const app = express();

app.use(router);

app.listen(8080, () => {
  console.log('Server is listening to http://localhost:8080');
});
