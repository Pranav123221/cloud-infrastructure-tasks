
const mongoose = require('mongoose');

// 1. Users Schema Definition
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  role: { type: String, enum: ['Admin', 'User', 'Coordinator'], default: 'User' },
  createdAt: { type: Date, default: Date.now }
});

// 2. Tasks / Infrastructure Resources Schema Definition
const taskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  category: { type: String, required: true }, // e.g., 'Cloud & DevOps', 'Backend'
  status: { type: String, enum: ['Pending', 'In-Progress', 'Completed'], default: 'Pending' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  updatedAt: { type: Date, default: Date.now }
});

// Compound Indexing for optimized query performance
taskSchema.index({ assignedTo: 1, status: 1 });

const User = mongoose.model('User', userSchema);
const Task = mongoose.model('Task', taskSchema);

module.exports = { User, Task };


