const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/Task');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mern_task_app', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Define a route to get all tasks
app.get('/tasks', async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
