const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  // You can add more fields as needed
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
