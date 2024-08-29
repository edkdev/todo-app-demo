const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 3002; // Changed port from 3000 to 3002

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/todos', todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
