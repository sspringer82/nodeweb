const model = {
  id: 3,
  todos: [
    { id: 1, task: 'aufstehen', status: 'done' },
    { id: 2, task: 'schlafen gehen', status: 'open' },
  ],
  getOne(id) {
    return this.todos.find(todo => todo.id === id);
  },
  getAll() {
    return this.todos;
  },
  getGreeting() {
    return 'Hello World';
  },
};

module.exports = model;
