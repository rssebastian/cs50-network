const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

// Init Middleware
// Allows us to parse request body
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));

// By default, backend run on 5000, or deployed PORT if present
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server listening on Port ${PORT}`));
