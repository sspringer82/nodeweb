const model = require('./model');

const controller = {
  listAction(req, res) {
    const tasks = model.getAll();
    res.render('list', { tasks: tasks });
  },
  detailAction(req, res) {
    const id = parseInt(req.params.id, 10);
    const task = model.getOne(id);
    res.render('detail', { task: task });
  },
};

module.exports = controller;
