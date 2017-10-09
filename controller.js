const model = require('./model');

const controller = {
  listAction(req, res) {
    res.render('list');
    //res.send(model.getAll());
  },
  detailAction(req, res) {
    const id = parseInt(req.params.id, 10);
    res.send(model.getOne(id));
  },
};

module.exports = controller;
