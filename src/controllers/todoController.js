const Todo = require('../models/todoModel');

// Initialize an empty array to store todos
let todos = [];

// Get all todos
exports.getAllTodos = (req, res) => {
  res.status(200).json(todos);
};

// Create a new todo
exports.createTodo = (req, res) => {
  const { title } = req.body;
  const newTodo = {
    id: todos.length + 1,
    title,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// Update a todo
exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const todo = todos.find(t => t.id === parseInt(id));

  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  todo.title = title !== undefined ? title : todo.title;
  todo.completed = completed !== undefined ? completed : todo.completed;
  res.status(200).json(todo);
};

// Delete a todo
exports.deleteTodo = (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  todos.splice(index, 1);
  res.status(204).send();
};