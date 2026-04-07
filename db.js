const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(
      process.env.MONGO_URL || 'mongodb://mongo:27017/lab8db'
    );
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;

