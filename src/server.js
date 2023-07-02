const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

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
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
