const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path'); // For handling file paths
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Mount your API routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));
app.use('/api/project', require('./routes/project'));
app.use('/api/requirement', require('./routes/requirement'));

// **Add a test API route for /api**
app.get('/api', (req, res) => {
  res.send('Welcome to the Solar Web App API');
});

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, '../client/my-react-app/build')));

// Catch-all route: send back React's index.html for any request that doesn't match an API route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/my-react-app/build', 'index.html'));
});
// Serve static files from React app build folder
app.use(express.static(path.join(__dirname, '../client/my-react-app/build')));

// Catch-all: send back React's index.html for any unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/my-react-app/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
