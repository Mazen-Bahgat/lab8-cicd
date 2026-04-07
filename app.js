const express = require('express');
const os = require('os');
const connectDB = require('./db');
const Task = require('./models/Task');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.json({
    app: 'CISC 886 Lab 8',
    mode: process.env.MODE || 'local',
    node: process.version,
    host: os.hostname(),
  });
});

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/tasks', async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      completed: req.body.completed || false
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log('--------------------------------------------------');
  console.log('  CISC 886 Lab 8 - App started');
  console.log(`  Port:  ${PORT}`);
  console.log(`  Mode:  ${process.env.MODE || 'local'}`);
  console.log(`  Node:  ${process.version}`);
  console.log(`  Host:  ${os.hostname()}`);
  console.log('--------------------------------------------------');
});
