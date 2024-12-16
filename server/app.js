const express = require('express');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');

const app = express();

//Middleware
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/auth', authRoutes);

module.exports = app;
