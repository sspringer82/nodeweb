const model = require('./model');

const controller = {
  listAction(req, res) {
    res.send(model.list);
  },
  detailAction(req, res) {
    res.send(model.detail);
  },
};

module.exports = controller;
