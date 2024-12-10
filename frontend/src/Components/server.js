const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8085; // Change from 5000 to 8085

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const uri = 'mongodb+srv://admin:admin@cluster0.bzwfiwy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// User Schema and Model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  role: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

// Routes

// Signup Route (User Registration)
app.post('/api/signup', async (req, res) => {
  const { username, password, name, role, email } = req.body;

  if (!username || !password || !name || !role || !email) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const newUser = new User({ username, password, name, role, email });
    await newUser.save();
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// Signin Route (User Login)
app.post('/api/signin', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Username and password are required" });
  }

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// Register Route (Alternative Registration Endpoint)
app.post('/register', async (req, res) => {
  const { name, role, email, password } = req.body;

  if (!name || !role || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newUser = new User({ name, role, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
