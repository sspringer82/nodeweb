const model = require('./model');

const controller = {
  listAction(req, res) {
    res.send(model.getAll());
  },
  detailAction(req, res) {
    const id = parseInt(req.params.id);
    res.send(model.getOne(id));
  },
};

module.exports = controller;
