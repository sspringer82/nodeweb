const router = require('express').Router();
const controller = require('./controller');

router.get('/list', controller.listAction);
router.get('/detail', controller.detailAction);

module.exports = router;
