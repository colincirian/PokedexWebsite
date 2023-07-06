const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Signup route
app.post('/api/signup', (req, res) => {
  // Perform your user registration logic here
  const { firstName, lastName, email, password } = req.body;

  // Example signup logic - create a new user in the database
  // Replace this with your actual user registration implementation
  // For simplicity, let's just return a success message
  res.json({ message: 'User registration successful' });
});

// Login route
app.post('/api/login', (req, res) => {
  // Perform your login authentication logic here
  const { email, password } = req.body;

  // Example login logic - check if email and password match
  if (email === 'user@example.com' && password === 'password') {
    // Generate a token (e.g., using JSON Web Tokens) and send it in the response
    const token = 'your-generated-token';
    res.json({ token });
  } else {
    // Authentication failed
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3001');
});
