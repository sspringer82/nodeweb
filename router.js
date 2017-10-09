const Router = require('express').Router;

const router = new Router();

router.get('/', (req, res) => {
  res.send('Hello Express client');
});
router.get('/list', (req, res) => {
  res.send('Hello List2');
});
router.get('/details', (req, res) => {
  res.send('Hello Details2');
});

module.exports = router;
